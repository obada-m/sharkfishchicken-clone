'use client';

import * as React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

type Location = {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: {
    [key: string]: string;
  };
  googleMapsUrl?: string;
};

const locationsData: Location[] = [
  {
    id: 'lansing',
    name: 'Sharks Lansing',
    address: '17669 Torrence Ave, Lansing, IL 60438',
    phone: '(708) 889-6581',
    hours: {
      'Sunday-Thursday': '10:00 AM - 12:00 AM',
      'Friday-Saturday': '10:00 AM - 2:00 AM',
    },
  },
  {
    id: 'merrilville',
    name: 'Sharks Merrilville',
    address: '510 W Lincoln Hwy, Merrillville, IN 46410',
    phone: '(219) 472-0608',
    hours: {
      'Sunday-Thursday': '10:00 AM - 12:00 AM',
      'Friday-Saturday': '10:00 AM - 2:00 AM',
    },
  },
  {
    id: 'sauk-village',
    name: 'Sharks Sauk Village',
    address: '16 E Sauk Trail, Sauk Village, IL 60411',
    phone: '(708) 757-5400',
    hours: {
      'Sunday-Thursday': '10:00 AM - 12:00 AM',
      'Friday-Saturday': '10:00 AM - 2:00 AM',
    },
  },
];

export default function LocationsSection() {
  return (
    <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Our Locations
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Find a Sharks Fish & Chicken location near you. Fresh, delicious food served daily across Illinois and Indiana.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {locationsData.map((location, index) => {
            const storeImages = [
              '/store_image2.jpeg',
              '/store_image1.jpeg',
              '/store_image3.jpeg',
            ];

            return (
              <Card
                key={location.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-white border-0 shadow-lg"
              >
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={storeImages[index] || '/store_image1.jpeg'}
                    alt={`${location.name} Restaurant`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20"></div>

                  {/* Location Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-2xl">
                      {location.name}
                    </h2>
                    <p className="text-white/95 text-base drop-shadow-lg flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-teal-300" />
                      {location.address}
                    </p>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Phone Number - Prominent */}
                    <div className="text-center">
                      <a
                        href={`tel:${location.phone}`}
                        className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-bold text-xl px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <Phone className="h-6 w-6" />
                        {location.phone}
                      </a>
                    </div>

                    {/* Store Hours */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-teal-100 rounded-lg">
                          <Clock className="h-5 w-5 text-teal-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">Store Hours</h3>
                      </div>

                      <div className="space-y-2">
                        {Object.entries(location.hours).map(([days, hours]) => (
                          <div
                            key={days}
                            className="flex justify-between items-center py-2 px-3 bg-white rounded-lg shadow-sm"
                          >
                            <span className="font-medium text-gray-700 text-sm whitespace-nowrap">{days}</span>
                            <span className="font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded text-sm whitespace-nowrap">
                              {hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <Button
                        variant="outline"
                        asChild
                        className="w-full border-2 border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300 font-semibold py-3 text-lg rounded-xl transition-all duration-300"
                      >
                        <a
                          href={
                            location.googleMapsUrl ||
                            `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                              location.address
                            )}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MapPin className="h-5 w-5 mr-2" />
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
