import * as React from 'react';

export default function WelcomeHeroSection() {
  return (
    <section
      id="main"
      className="relative w-full bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "url('https://static-content.owner.com/funnel/images/d3b79b5b-e6ec-49d3-ae4e-faed49f0bc26?v=2364557284&w=3840&q=80&auto=format')",
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative container mx-auto text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Welcome to Sharks Fish & Chicken🐟🍗
          </h2>
          <p className="mt-6 text-lg leading-8">
            Sharks Fish & Chicken is your go-to spot for delicious fried chicken, wings, shrimp, fish, and more! With locations in Posen, Hazelcrest, and Hillside, we're a local favorite for everyone—whether you're dining in, ordering for delivery, or picking up. Taste the flavor that everyone loves!
          </p>
        </div>
      </div>
    </section>
  );
}