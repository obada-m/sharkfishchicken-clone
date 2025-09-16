import React from 'react';

const FamilyDiningSection = () => {
  const backgroundImageUrl = "/images/img_1.jpeg";

  return (
    <section
      className="relative bg-cover bg-center py-24 sm:py-32"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      aria-labelledby="family-dining-heading"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" aria-hidden="true" />
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="family-dining-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Casual and Family-Friendly Dining 🍽️👨‍👩‍👧‍👦
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Our dining spaces are perfect for families and friends to enjoy a meal together. With a relaxed, welcoming atmosphere, Sharks Fish & Chicken is ideal for a quick lunch or a casual dinner. We make sure every meal is served with a smile and a great experience!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FamilyDiningSection;