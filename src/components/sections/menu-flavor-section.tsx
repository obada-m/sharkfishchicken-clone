import React from 'react';
import Link from 'next/link';

const MenuFlavorSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 sm:py-32"
      style={{
        backgroundImage: `url('https://static-content.owner.com/funnel/images/a7025488-4b18-4427-8ba1-691150332873?v=7212107112&w=3840&q=80&auto=format')`,
      }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/60"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A Menu Full of Flavor! 🍤🐔
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            At Sharks Fish &amp; Chicken, we specialize in fried chicken, wings, shrimp, fish, and oysters. Whether you're after a crispy meal or something light, our combos and sides have something for everyone. Grab a quick bite or enjoy a full meal with our mouthwatering options!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/menu"
              className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Our Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuFlavorSection;