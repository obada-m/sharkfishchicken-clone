import { PromoBanner } from "@/components/sections/banner-section";
import NavigationHeader from "@/components/sections/navigation-header";
import FeaturedMenuSection from "@/components/sections/featured-menu-section";
import WelcomeHeroSection from "@/components/sections/welcome-hero-section";
import MenuFlavorSection from "@/components/sections/menu-flavor-section";
import OrderOnlineSection from "@/components/sections/order-online-section";
import MenuGallerySection from "@/components/sections/menu-gallery-section";
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
      <PromoBanner />
      <NavigationHeader />
      
      <main>
        <WelcomeHeroSection />
        <FeaturedMenuSection />
        <MenuFlavorSection />
        <OrderOnlineSection />
        <MenuGallerySection />
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