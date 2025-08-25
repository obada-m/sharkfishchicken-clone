import { Truck, ShoppingBag, Utensils } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="bg-background py-[60px]">
      <div className="container text-center">
        <h4 className="text-xl font-semibold text-foreground mb-12">
          Featuring
        </h4>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-16 md:gap-24">
          <div className="flex flex-col items-center gap-4">
            <Truck className="h-12 w-12 text-primary" />
            <span className="text-lg font-semibold text-foreground">Delivery</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <ShoppingBag className="h-12 w-12 text-primary" />
            <span className="text-lg font-semibold text-foreground">Takeout</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Utensils className="h-12 w-12 text-primary" />
            <span className="text-lg font-semibold text-foreground">Dine In</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;