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
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <div className="relative h-48">
                  <Image
                    src={storeImages[index] || '/store_image1.jpeg'}
                    alt={`${location.name} Restaurant`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                      {location.name}
                    </h2>
                    <p className="text-white/90 text-sm drop-shadow-md">
                      {location.address}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-teal-50 rounded-lg p-3">
                        <div className="text-teal-600 font-bold text-lg">
                          10+
                        </div>
                        <div className="text-xs text-gray-600">
                          Years Serving
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-blue-600 font-bold text-lg">
                          5mi
                        </div>
                        <div className="text-xs text-gray-600">
                          Delivery Radius
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Phone className="h-5 w-5 text-teal-600" />
                        <a
                          href={`tel:${location.phone}`}
                          className="text-teal-600 hover:text-teal-700 font-semibold text-lg"
                        >
                          {location.phone}
                        </a>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 mb-2">
                            Store Hours
                          </p>
                          <div className="text-sm text-gray-600 space-y-1">
                            {Object.entries(location.hours).map(
                              ([days, hours]) => (
                                <div
                                  key={days}
                                  className="flex justify-between items-center"
                                >
                                  <span className="font-medium">{days}</span>
                                  <span className="text-teal-600">{hours}</span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        asChild
                        className="border-teal-200 text-teal-700 hover:bg-teal-50"
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
                          <MapPin className="h-4 w-4 mr-2" />
                          Directions
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        asChild
                        className="border-blue-200 text-blue-700 hover:bg-blue-50"
                      >
                        <a href={`tel:${location.phone}`}>
                          <Phone className="h-4 w-4 mr-2" />
                          Call Now
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
