import React from 'react';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LOCATIONS } from '@/lib/menu-data';
import NavigationHeader from '@/components/sections/navigation-header';
import Footer from '@/components/sections/footer';
import Link from 'next/link';

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Locations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find a Sharks Fish & Chicken location near you. We're proud to serve
            delicious fried chicken and fish across Indiana.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {LOCATIONS.map((location) => (
            <Card
              key={location.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-teal-600" />
                  {location.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a
                        href={`tel:${location.phone}`}
                        className="text-teal-600 hover:text-teal-700 font-medium"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Hours</p>
                      <div className="text-sm text-gray-600 space-y-1">
                        {Object.entries(location.hours).map(([days, hours]) => (
                          <div key={days} className="flex justify-between">
                            <span className="font-medium">{days}:</span>
                            <span>{hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      asChild
                      className="flex-1 bg-teal-600 hover:bg-teal-700"
                    >
                      <a href={`#`} rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Order Online
                      </a>
                    </Button>

                    <Button variant="outline" asChild className="flex-1">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                          location.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                  </div>

                  {/* Quick Call Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full text-teal-600 border-teal-200 hover:bg-teal-50"
                  >
                    <a href={`#`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call to Order
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Sharks Fish & Chicken?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🍗</div>
                <h3 className="font-semibold mb-2">Fresh Daily</h3>
                <p className="text-sm text-gray-600">
                  All our chicken and fish is prepared fresh daily with our
                  secret seasoning blend
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">🚗</div>
                <h3 className="font-semibold mb-2">Fast Service</h3>
                <p className="text-sm text-gray-600">
                  Quick pickup, delivery, and dine-in options available at all
                  locations
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
                <h3 className="font-semibold mb-2">Family Owned</h3>
                <p className="text-sm text-gray-600">
                  Serving the Indiana community with pride for years with
                  authentic flavors
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-teal-600 hover:bg-teal-700"
              >
                <Link href="/menu">Browse Our Menu</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            We Also Serve These Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {['Lansing', 'Merrilville', 'Sauk Village'].map((area) => (
              <span
                key={area}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Contact your nearest location to confirm delivery availability in
            your area
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
