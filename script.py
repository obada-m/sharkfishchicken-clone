import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin, urlparse
import time
import mimetypes

def download_images(url, download_folder="downloaded_images", delay=1):
    """
    Download all images from a given URL
    
    Args:
        url (str): The URL to scrape images from
        download_folder (str): Folder to save images
        delay (float): Delay between downloads in seconds
    """
    
    # Create download folder if it doesn't exist
    if not os.path.exists(download_folder):
        os.makedirs(download_folder)
    
    try:
        # Set headers to mimic a real browser
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        # Get the webpage content
        print(f"Fetching webpage: {url}")
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        # Parse HTML content
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find all image tags
        img_tags = soup.find_all('img')
        
        if not img_tags:
            print("No images found on the page")
            return
        
        print(f"Found {len(img_tags)} image tags")
        
        downloaded_count = 0
        
        for i, img in enumerate(img_tags, 1):
            try:
                # Get image source URL
                img_url = img.get('src') or img.get('data-src') or img.get('data-lazy-src')
                
                if not img_url:
                    print(f"Image {i}: No source URL found")
                    continue
                
                # Convert relative URLs to absolute URLs
                img_url = urljoin(url, img_url)
                
                print(f"Processing image {i}/{len(img_tags)}: {img_url}")
                
                # Download the image
                img_response = requests.get(img_url, headers=headers, timeout=10, stream=True)
                img_response.raise_for_status()
                
                # Get file extension from content type or URL
                content_type = img_response.headers.get('content-type', '')
                extension = mimetypes.guess_extension(content_type.split(';')[0])
                
                if not extension:
                    # Fallback to URL extension
                    parsed_url = urlparse(img_url)
                    extension = os.path.splitext(parsed_url.path)[1]
                
                if not extension:
                    extension = '.jpg'  # Default extension
                
                # Generate filename
                filename = f"image_{i:03d}{extension}"
                filepath = os.path.join(download_folder, filename)
                
                # Save the image
                with open(filepath, 'wb') as f:
                    for chunk in img_response.iter_content(chunk_size=8192):
                        f.write(chunk)
                
                file_size = os.path.getsize(filepath)
                print(f"✓ Downloaded: {filename} ({file_size} bytes)")
                downloaded_count += 1
                
                # Add delay between downloads to be respectful
                if delay > 0:
                    time.sleep(delay)
                
            except requests.exceptions.RequestException as e:
                print(f"✗ Failed to download image {i}: {e}")
                continue
            except Exception as e:
                print(f"✗ Error processing image {i}: {e}")
                continue
        
        print(f"\nDownload complete! {downloaded_count}/{len(img_tags)} images downloaded to '{download_folder}'")
        
    except requests.exceptions.RequestException as e:
        print(f"Error fetching webpage: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")

def download_images_advanced(url, download_folder="downloaded_images", 
                           min_size=1024, delay=1, allowed_extensions=None):
    """
    Advanced version with filtering options
    
    Args:
        url (str): The URL to scrape images from
        download_folder (str): Folder to save images
        min_size (int): Minimum file size in bytes
        delay (float): Delay between downloads
        allowed_extensions (list): List of allowed extensions (e.g., ['.jpg', '.png'])
    """
    
    if allowed_extensions is None:
        allowed_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp']
    
    # Create download folder
    if not os.path.exists(download_folder):
        os.makedirs(download_folder)
    
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        
        print(f"Fetching webpage: {url}")
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find images in multiple ways
        img_tags = soup.find_all('img')
        
        # Also check for background images in CSS
        elements_with_bg = soup.find_all(attrs={'style': True})
        
        all_img_urls = set()
        
        # Extract from img tags
        for img in img_tags:
            img_url = img.get('src') or img.get('data-src') or img.get('data-lazy-src')
            if img_url:
                all_img_urls.add(urljoin(url, img_url))
        
        # Extract from background-image styles
        for element in elements_with_bg:
            style = element.get('style', '')
            if 'background-image' in style:
                # Simple regex to extract URL from background-image
                import re
                matches = re.findall(r'background-image:\s*url\(["\']?([^"\']+)["\']?\)', style)
                for match in matches:
                    all_img_urls.add(urljoin(url, match))
        
        print(f"Found {len(all_img_urls)} unique image URLs")
        
        downloaded_count = 0
        
        for i, img_url in enumerate(sorted(all_img_urls), 1):
            try:
                print(f"Processing image {i}/{len(all_img_urls)}: {img_url}")
                
                # Head request to check content type and size
                head_response = requests.head(img_url, headers=headers, timeout=10)
                
                content_type = head_response.headers.get('content-type', '').lower()
                content_length = int(head_response.headers.get('content-length', 0))
                
                # Skip if too small
                if content_length > 0 and content_length < min_size:
                    print(f"  Skipping: too small ({content_length} bytes)")
                    continue
                
                # Check if it's an image
                if not any(img_type in content_type for img_type in ['image/', 'jpeg', 'jpg', 'png', 'gif']):
                    print(f"  Skipping: not an image ({content_type})")
                    continue
                
                # Download the image
                img_response = requests.get(img_url, headers=headers, timeout=10, stream=True)
                img_response.raise_for_status()
                
                # Determine extension
                extension = mimetypes.guess_extension(content_type.split(';')[0])
                if not extension:
                    parsed_url = urlparse(img_url)
                    extension = os.path.splitext(parsed_url.path)[1].lower()
                if not extension or extension not in allowed_extensions:
                    extension = '.jpg'
                
                # Generate unique filename
                filename = f"image_{i:03d}{extension}"
                filepath = os.path.join(download_folder, filename)
                
                # Save image
                with open(filepath, 'wb') as f:
                    for chunk in img_response.iter_content(chunk_size=8192):
                        f.write(chunk)
                
                file_size = os.path.getsize(filepath)
                
                # Check actual file size
                if file_size < min_size:
                    os.remove(filepath)
                    print(f"  Removed: too small after download ({file_size} bytes)")
                    continue
                
                print(f"✓ Downloaded: {filename} ({file_size} bytes)")
                downloaded_count += 1
                
                time.sleep(delay)
                
            except Exception as e:
                print(f"✗ Error with image {i}: {e}")
                continue
        
        print(f"\nDownload complete! {downloaded_count} images downloaded to '{download_folder}'")
        
    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage
if __name__ == "__main__":
    # Basic usage
    target_url = input("Enter the URL to scrape images from: ").strip()
    
    if target_url:
        print("\n=== Basic Download ===")
        download_images(target_url)
        
        print("\n=== Advanced Download (min 5KB, PNG/JPG only) ===")
        download_images_advanced(
            target_url, 
            download_folder="filtered_images",
            # min_size=5120,  # 5KB minimum
            delay=0.5,
            allowed_extensions=['.jpg', '.jpeg', '.png']
        )
    else:
        # Demo with a sample URL
        print("No URL provided. Using demo URL...")
        demo_url = "https://example.com"
        download_images(demo_url)