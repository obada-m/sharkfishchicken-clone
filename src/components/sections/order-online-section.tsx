import React from 'react';
import Link from 'next/link';

const OrderOnlineSection = () => {
  const backgroundImageUrl = "https://static-content.owner.com/funnel/images/c9aeb58d-a31a-491a-9c90-80f7eaa19432?v=4384864088&w=3840&q=80&auto=format";

  return (
    <section
      className="relative bg-cover bg-center text-center"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Order Online for Pickup or Delivery! 🚗📱
          </h2>
          <p className="mb-8 text-base leading-relaxed text-gray-200 sm:text-lg">
            No time to dine in? No problem! Ordering from Sharks Fish & Chicken is simple. You can choose pickup or delivery, so your meal gets to you fast and fresh. Enjoy great food at home or wherever you are with just a few clicks!
          </p>
          <Link
            href="https://sharkfishchicken.com/menu"
            className="inline-block rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground shadow-md transition-transform duration-200 hover:scale-105 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderOnlineSection;