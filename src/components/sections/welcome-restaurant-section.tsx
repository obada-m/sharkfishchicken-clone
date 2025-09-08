import React from 'react';
import Image from 'next/image';

const WelcomeRestaurantSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Sharks Fish & Chicken🐟🍗
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Sharks Fish & Chicken is your go-to spot for delicious fried chicken, 
              wings, shrimp, fish, and more! With locations in Merrilville, Lancing, and 
              Sauk Village, we're a local favorite for everyone—whether you're dining in, 
              ordering for delivery, or picking up. Taste the flavor that everyone loves!
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/image_014.png"
                alt="Sharks Fish & Chicken Restaurant Storefront"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeRestaurantSection;