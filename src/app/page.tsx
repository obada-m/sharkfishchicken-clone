import NavigationHeader from "@/components/sections/navigation-header";
import FeaturedMenuSection from "@/components/sections/featured-menu-section";
import WelcomeHeroSection from "@/components/sections/welcome-hero-section";
import MenuFlavorSection from "@/components/sections/menu-flavor-section";
import OrderOnlineSection from "@/components/sections/order-online-section";
import WelcomeRestaurantSection from "@/components/sections/welcome-restaurant-section";
import MenuGallerySection from "@/components/sections/menu-gallery-section";
import OurStorySection from "@/components/sections/our-story-section";
import FamilyDiningSection from "@/components/sections/family-dining-section";
import VisitTodaySection from "@/components/sections/visit-today-section";
import CustomerReviewsSection from "@/components/sections/customer-reviews-section";
import FeaturesSection from "@/components/sections/features-section";
import RewardsProgramSection from "@/components/sections/rewards-program-section";
import FaqSection from "@/components/sections/faq-section";
import LocationsSection from "@/components/sections/locations-section";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />
      
      <main>
        <WelcomeHeroSection />
        <FeaturedMenuSection />
        <WelcomeRestaurantSection />
        <MenuFlavorSection />
        <OrderOnlineSection />
        <MenuGallerySection />
        <OurStorySection />
        <FamilyDiningSection />
        <VisitTodaySection />
        <CustomerReviewsSection />
        <FeaturesSection />
        <RewardsProgramSection />
        <FaqSection />
        <LocationsSection />
      </main>
      
      <Footer />
    </div>
  );
}