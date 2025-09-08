import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "@/components/ui/cart-drawer";

export const metadata: Metadata = {
  title: "Sharks Fish & Chicken - Best Fried Chicken Restaurant in IL",
  description: "Experience a crispy, flavorful sensation in every bite. Sharks Fish & Chicken offers authentic fried chicken, fish, wings, and seafood across 3 locations in Illinois and Indiana including Merrilville, Lancing, and Sauk Village.",
  keywords: "fried chicken, fish, wings, seafood, restaurant, Illinois, Indiana, Merrilville, Lancing, Sauk Village, delivery, pickup, catering",
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
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
