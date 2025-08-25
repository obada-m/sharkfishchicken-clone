import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "@/components/ui/cart-drawer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sharks Fish & Chicken - Best Fried Chicken Restaurant in IL",
  description: "Experience a crispy, flavorful sensation in every bite. Sharks Fish & Chicken offers authentic fried chicken, fish, wings, and seafood across 4 locations in Illinois including Posen, Hillside, Hazel Crest, and Harvey.",
  keywords: "fried chicken, fish, wings, seafood, restaurant, Illinois, Posen, Hillside, Hazel Crest, Harvey, delivery, pickup, catering",
  openGraph: {
    title: "Sharks Fish & Chicken - Best Fried Chicken Restaurant in IL",
    description: "Experience a crispy, flavorful sensation in every bite. Order online for pickup or delivery.",
    type: "website",
    locale: "en_US",
    siteName: "Sharks Fish & Chicken",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharks Fish & Chicken - Best Fried Chicken Restaurant in IL",
    description: "Experience a crispy, flavorful sensation in every bite. Order online for pickup or delivery.",
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
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
