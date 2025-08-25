import React from 'react';

const VisitTodaySection = () => {
  return (
    <section className="w-full bg-background py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Visit Us Today or Order Online! 🍴
          </h2>
          <p className="text-muted-foreground md:text-lg/relaxed">
            Sharks Fish & Chicken is ready to serve you! Whether you&apos;re dining
            in or ordering out, we offer fast, fresh meals at great prices.
            Visit us today or place your order online for a convenient and tasty
            meal. You’ll love our food and service!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisitTodaySection;