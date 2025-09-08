import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const MenuFlavorSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/image_015.png"
                alt="A Menu Full of Flavor - Fish, Shrimp, and Fries"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Menu Full of Flavor! 🍤🐔
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At Sharks Fish & Chicken, we specialize in fried chicken, wings, shrimp, 
              fish, and oysters. Whether you're after a crispy meal or something light, 
              our combos and sides have something for everyone. Grab a quick bite or 
              enjoy a full meal with our mouthwatering options!
            </p>
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/menu">Our Menu</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuFlavorSection;