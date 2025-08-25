"use client";

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
    name: "Posen",
    slug: "posen",
    fullName: "Sharks Fish & Chicken Posen, IL",
    locationUrl: "https://sharkfishchicken.com/sharksfishchicken-posen",
    getDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=14727%20Kedzie%20Ave%2C%20Posen%2C%20IL%2060469%2C%20USA",
    addressLines: ["14727 Kedzie Ave", "Posen, IL 60469"],
    phone: "(708) 239-0077",
    phoneHref: "tel:+17082390077",
    email: "esilymoe@gmail.com",
    emailHref: "mailto:esilymoe@gmail.com",
    hours: [
      { day: "Sunday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
      { day: "Monday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
      { day: "Tuesday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
      { day: "Wednesday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
      { day: "Thursday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
      { day: "Friday", store: "10:00 AM - 2:00 AM CDT", pickupDelivery: "10:00 AM - 2:00 AM CDT" },
      { day: "Saturday", store: "10:00 AM - 2:00 AM CDT", pickupDelivery: "10:00 AM - 2:00 AM CDT" },
    ],
    orderOnlineUrl: "https://sharkfishchicken.com/menu/sharksfishchicken-posen",
  },
  {
    name: "Hillside",
    slug: "hillside",
    fullName: "Sharks Fish & Chicken Hillside, IL",
    locationUrl: "https://sharkfishchicken.com/sharksfishandchicken-hillside",
    getDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=4741%20Butterfield%20Rd%2C%20Hillside%2C%20IL%2060162%2C%20USA",
    addressLines: ["4741 Butterfield Rd", "Hillside, IL 60162"],
    phone: "(708) 540-4242",
    phoneHref: "tel:+17085404242",
    email: "esilymoe@gmail.com",
    emailHref: "mailto:esilymoe@gmail.com",
    hours: [
      { day: "Sunday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
      { day: "Monday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
      { day: "Tuesday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
      { day: "Wednesday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
      { day: "Thursday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
      { day: "Friday", store: "10:00 AM - 2:00 AM CDT", pickupDelivery: "10:00 AM - 2:00 AM CDT" },
      { day: "Saturday", store: "10:00 AM - 2:00 AM CDT", pickupDelivery: "10:00 AM - 2:00 AM CDT" },
    ],
    orderOnlineUrl: "https://sharkfishchicken.com/menu/sharksfishandchicken-hillside",
  },
  {
    name: "Hazel Crest",
    slug: "hazel-crest",
    fullName: "Sharks Fish & Chicken Hazel Crest, IL",
    locationUrl: "https://sharkfishchicken.com/sharksfishchicken-hazel",
    getDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=17455%20Kedzie%20Ave%2C%20Hazel%20Crest%2C%20IL%2060429%2C%20USA",
    addressLines: ["South Suburbs, 17455 Kedzie Ave", "Hazel Crest, IL 60429"],
    phone: "(708) 335-9000",
    phoneHref: "tel:+17083359000",
    email: "esilymoe@gmail.com",
    emailHref: "mailto:esilymoe@gmail.com",
    hours: [
       { day: "Sunday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
       { day: "Monday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
       { day: "Tuesday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
       { day: "Wednesday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
       { day: "Thursday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
       { day: "Friday", store: "10:00 AM - 2:00 AM CDT", pickupDelivery: "10:00 AM - 2:00 AM CDT" },
       { day: "Saturday", store: "10:00 AM - 2:00 AM CDT", pickupDelivery: "10:00 AM - 2:00 AM CDT" },
    ],
    orderOnlineUrl: "https://sharkfishchicken.com/menu/sharksfishchicken-hazel",
  },
  {
    name: "Harvey",
    slug: "harvey",
    fullName: "Sharks Fish & Chicken Harvey, IL",
    locationUrl: "https://sharkfishchicken.com/sharksfishchicken-harvey",
    getDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=159%20W%20159th%20St%2C%20Harvey%2C%20IL%2060426%2C%20USA",
    addressLines: ["159 W 159th St", "Harvey, IL 60426"],
    phone: "(708) 339-1800",
    phoneHref: "tel:+17083391800",
    email: "esilymoe@gmail.com",
    emailHref: "mailto:esilymoe@gmail.com",
    hours: [
      { day: "Sunday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
      { day: "Monday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
      { day: "Tuesday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
      { day: "Wednesday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
      { day: "Thursday", store: "10:00 AM - 12:00 AM CDT", pickupDelivery: "10:00 AM - 12:00 AM CDT" },
      { day: "Friday", store: "10:00 AM - 2:00 AM CDT", pickupDelivery: "10:00 AM - 2:00 AM CDT" },
      { day: "Saturday", store: "10:00 AM - 2:00 AM CDT", pickupDelivery: "10:00 AM - 2:00 AM CDT" },
    ],
    orderOnlineUrl: "https://sharkfishchicken.com/menu/sharksfishchicken-harvey",
  },
];

export default function LocationsSection() {
  const [activeTab, setActiveTab] = useState(locationsData[0].slug);

  const activeLocation = locationsData.find(loc => loc.slug === activeTab);

  return (
    <section className="bg-background text-foreground py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Our locations</h2>
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
              <a href={activeLocation.locationUrl} className="text-xl font-semibold text-foreground hover:text-primary mb-2 md:mb-0">
                {activeLocation.fullName.replace("  ", " ")}
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
                  <h4 className="font-semibold text-foreground mb-2">Address</h4>
                  <a href={activeLocation.getDirectionsUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    {activeLocation.addressLines.map((line, index) => (
                      <span key={index} className="block">{line}</span>
                    ))}
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Contacts</h4>
                  <div className="space-y-1">
                    <a href={activeLocation.phoneHref} className="block text-muted-foreground hover:text-primary">{activeLocation.phone}</a>
                    <a href={activeLocation.emailHref} className="block text-muted-foreground hover:text-primary">{activeLocation.email}</a>
                  </div>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-[1fr,1.5fr,1.5fr] gap-x-4 text-sm text-muted-foreground">
                  <div className="font-semibold text-foreground"></div>
                  <div className="font-semibold text-foreground">Store</div>
                  <div className="font-semibold text-foreground">Pickup & Delivery</div>
                  {activeLocation.hours.map((hour) => (
                    <React.Fragment key={hour.day}>
                      <div className="py-1 font-medium text-foreground">{hour.day}</div>
                      <div className="py-1">{hour.store.split(' CDT')[0]}</div>
                      <div className="py-1">{hour.pickupDelivery.split(' CDT')[0]}</div>
                    </React.Fragment>
                  ))}
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