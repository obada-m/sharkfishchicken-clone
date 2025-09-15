import type { Metadata } from 'next';
import './globals.css';
import ErrorReporter from '@/components/ErrorReporter';

export const metadata: Metadata = {
  title: 'Sharks Fish & Chicken - Best Fried Chicken Restaurant',
  description:
    'Experience a crispy, flavorful sensation in every bite. Sharks Fish & Chicken offers authentic fried chicken, fish, wings, and seafood across 3 locations including Merrilville, Lansing, and Sauk Village.',
  keywords:
    'fried chicken, fish, wings, seafood, restaurant, Merrilville, Lansing, Sauk Village, delivery, pickup, catering',
  icons: {
    icon: '/image_001.png',
    shortcut: '/image_001.png',
    apple: '/image_001.png',
  },
  openGraph: {
    title: 'Sharks Fish & Chicken - Best Fried Chicken Restaurant',
    description:
      'Experience a crispy, flavorful sensation in every bite. Order online for pickup or delivery.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sharks Fish & Chicken',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sharks Fish & Chicken - Best Fried Chicken Restaurant',
    description:
      'Experience a crispy, flavorful sensation in every bite. Order online for pickup or delivery.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}
