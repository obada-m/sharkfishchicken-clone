import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function WelcomeHeroSection() {
  return (
    <section
      id="main"
      className="relative w-full h-[600px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://static-content.owner.com/funnel/images/d3b79b5b-e6ec-49d3-ae4e-faed49f0bc26?v=2364557284&w=3840&q=80&auto=format')",
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-white text-lg font-medium mb-4">
            Best Fried Chicken Restaurant in IL
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Experience a Crispy, Flavorful Sensation in Every Bite.
          </h1>
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 text-lg">
            <Link href="/order">Order online</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}