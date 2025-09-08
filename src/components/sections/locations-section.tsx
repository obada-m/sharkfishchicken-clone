'use client';

import * as React from 'react';
import { useState } from 'react';

type LocationHours = {
  day: string;
  store: string;
  pickupDelivery: string;
};

type Location = {
  name: string;
  slug: string;
  fullName: string;
  locationUrl: string;
  getDirectionsUrl: string;
  addressLines: string[];
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  hours: LocationHours[];
  orderOnlineUrl: string;
};

const locationsData: Location[] = [
  {
    name: 'Merrilville',
    slug: 'merrilville',
    fullName: 'Sharks Fish & Chicken Merrilville, IN',
    locationUrl: 'https://sharkfishchicken.com/sharksfishchicken-merrilville',
    getDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Merrilville%2C%20IN',
    addressLines: ['Merrilville, IN'],
    phone: '+12194720608',
    phoneHref: 'tel:+12194720608',
    email: 'merrilville@sharks.com',
    emailHref: 'mailto:merrilville@sharks.com',
    hours: [
      {
        day: 'Sunday',
        store: '10:00 AM - 12:00 AM CDT',
        pickupDelivery: '10:00 AM - 12:00 AM CDT',
      },
      {
        day: 'Monday',
        store: '10:00 AM - 12:00 AM CDT',
        pickupDelivery: '10:00 AM - 12:00 AM CDT',
      },
      {
        day: 'Tuesday',
        store: '10:00 AM - 12:00 AM CDT',
        pickupDelivery: '10:00 AM - 12:00 AM CDT',
      },
      {
        day: 'Wednesday',
        store: '10:00 AM - 12:00 AM CDT',
        pickupDelivery: '10:00 AM - 12:00 AM CDT',
      },
      {
        day: 'Thursday',
        store: '10:00 AM - 12:00 AM CDT',
        pickupDelivery: '10:00 AM - 12:00 AM CDT',
      },
      {
        day: 'Friday',
        store: '10:00 AM - 2:00 AM CDT',
        pickupDelivery: '10:00 AM - 2:00 AM CDT',
      },
      {
        day: 'Saturday',
        store: '10:00 AM - 2:00 AM CDT',
        pickupDelivery: '10:00 AM - 2:00 AM CDT',
      },
    ],
    orderOnlineUrl:
      'https://sharkfishchicken.com/menu/sharksfishchicken-merrilville',
  },
  {
    name: 'Lancing',
    slug: 'lancing',
    fullName: 'Sharks Fish & Chicken Lancing, IN',
    locationUrl: 'https://sharkfishchicken.com/sharksfishandchicken-lancing',
    getDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Torrence%20Avenue%2C%20Lancing%2C%20IN',
    addressLines: ['Torrence Avenue', 'Lancing, IN'],
    phone: '(708) 555-0002',
    phoneHref: 'tel:+17085550002',
    email: 'lancing@sharks.com',
    emailHref: 'mailto:lancing@sharks.com',
    hours: [
      {
        day: 'Sunday',
        store: '10:00 AM - 12:00 AM CDT',
        pickupDelivery: '10:00 AM - 12:00 AM CDT',
      },
      {
        day: 'Monday',
        store: '10:00 AM - 12:00 AM CDT',
        pickupDelivery: '10:00 AM - 12:00 AM CDT',
      },
      {
        day: 'Tuesday',
        store: '10:00 AM - 12:00 AM CDT',
        pickupDelivery: '10:00 AM - 12:00 AM CDT',
      },
      {
        day: 'Wednesday',
        store: '10:00 AM - 12:00 AM CDT',
        pickupDelivery: '10:00 AM - 12:00 AM CDT',
      },
      {
        day: 'Thursday',
        store: '10:00 AM - 12:00 AM CDT',
        pickupDelivery: '10:00 AM - 12:00 AM CDT',
      },
      {
        day: 'Friday',
        store: '10:00 AM - 2:00 AM CDT',
        pickupDelivery: '10:00 AM - 2:00 AM CDT',
      },
      {
        day: 'Saturday',
        store: '10:00 AM - 2:00 AM CDT',
        pickupDelivery: '10:00 AM - 2:00 AM CDT',
      },
    ],
    orderOnlineUrl:
      'https://sharkfishchicken.com/menu/sharksfishandchicken-lancing',
  },
  {
    name: 'Sauk Village',
    slug: 'sauk-village',
    fullName: 'Sharks Fish & Chicken Sauk Village, IN',
    locationUrl: 'https://sharkfishchicken.com/sharksfishchicken-sauk-village',
    getDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Sauk%20Trail%2C%20Sauk%20Village%2C%20IN',
    addressLines: ['Sauk Trail', 'Sauk Village, IN'],
    phone: '(708) 555-0003',
    phoneHref: 'tel:+17085550003',
    email: 'saukvillage@sharks.com',
    emailHref: 'mailto:saukvillage@sharks.com',
    hours: [
      {
        day: 'Sunday',
        store: '10:00 AM - 12:00 AM CDT',
        pickupDelivery: '10:00 AM - 12:00 AM CDT',
      },
      {
        day: 'Monday',
        store: '10:00 AM - 12:00 AM CDT',
        pickupDelivery: '10:00 AM - 12:00 AM CDT',
      },
      {
        day: 'Tuesday',
        store: '10:00 AM - 12:00 AM CDT',
        pickupDelivery: '10:00 AM - 12:00 AM CDT',
      },
      {
        day: 'Wednesday',
        store: '10:00 AM - 12:00 AM CDT',
        pickupDelivery: '10:00 AM - 12:00 AM CDT',
      },
      {
        day: 'Thursday',
        store: '10:00 AM - 12:00 AM CDT',
        pickupDelivery: '10:00 AM - 12:00 AM CDT',
      },
      {
        day: 'Friday',
        store: '10:00 AM - 2:00 AM CDT',
        pickupDelivery: '10:00 AM - 2:00 AM CDT',
      },
      {
        day: 'Saturday',
        store: '10:00 AM - 2:00 AM CDT',
        pickupDelivery: '10:00 AM - 2:00 AM CDT',
      },
    ],
    orderOnlineUrl:
      'https://sharkfishchicken.com/menu/sharksfishchicken-sauk-village',
  },
];

export default function LocationsSection() {
  const [activeTab, setActiveTab] = useState(locationsData[0].slug);

  const activeLocation = locationsData.find((loc) => loc.slug === activeTab);

  return (
    <section className="bg-background text-foreground py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Our locations
        </h2>
        <div className="flex justify-center border-b border-border mb-8">
          {locationsData.map((location) => (
            <button
              key={location.slug}
              onClick={() => setActiveTab(location.slug)}
              className={`py-3 px-4 text-base font-semibold focus:outline-none transition-colors duration-200 ${
                activeTab === location.slug
                  ? 'border-b-2 border-primary text-primary'
                  : 'border-b-2 border-transparent text-muted-foreground hover:text-primary'
              }`}
            >
              {location.name}
            </button>
          ))}
        </div>

        {activeLocation && (
          <div className="border border-border rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
              <a
                href={activeLocation.locationUrl}
                className="text-xl font-semibold text-foreground hover:text-primary mb-2 md:mb-0"
              >
                {activeLocation.fullName.replace('  ', ' ')}
              </a>
              <a
                href={activeLocation.getDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary hover:underline whitespace-nowrap"
              >
                Get Directions
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Address
                  </h4>
                  <a
                    href={activeLocation.getDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2 p-3 bg-muted/50 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors group"
                  >
                    <div>
                      {activeLocation.addressLines.map((line, index) => (
                        <span
                          key={index}
                          className="block text-muted-foreground group-hover:text-primary"
                        >
                          {line}
                        </span>
                      ))}
                      <span className="text-xs text-primary mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Click for directions →
                      </span>
                    </div>
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Contact
                  </h4>
                  <div className="space-y-2">
                    <a
                      href={activeLocation.phoneHref}
                      className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors group"
                    >
                      <svg
                        className="w-4 h-4 text-muted-foreground group-hover:text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="text-muted-foreground group-hover:text-primary">
                        {activeLocation.phone}
                      </span>
                    </a>
                    <a
                      href={activeLocation.emailHref}
                      className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors group"
                    >
                      <svg
                        className="w-4 h-4 text-muted-foreground group-hover:text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-muted-foreground group-hover:text-primary">
                        {activeLocation.email}
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Hours of Operation
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 px-4 bg-muted/50 rounded-lg">
                    <div className="font-medium text-foreground">
                      Sunday - Thursday
                    </div>
                    <div className="text-muted-foreground">
                      10:00 AM - 12:00 AM
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2 px-4 bg-muted/50 rounded-lg">
                    <div className="font-medium text-foreground">
                      Friday - Saturday
                    </div>
                    <div className="text-muted-foreground">
                      10:00 AM - 2:00 AM
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Same hours for dine-in, pickup, and delivery
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={activeLocation.orderOnlineUrl}
                className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                Order online
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
