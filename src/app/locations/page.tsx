import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LOCATIONS } from '@/lib/menu-data';
import NavigationHeader from '@/components/sections/navigation-header';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import Image from 'next/image';

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      {/* Hero Section with Background */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="absolute inset-0">
          <Image
            src="/images/img_17.jpeg"
            alt="Sharks Fish & Chicken Restaurant"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>

        <NavigationHeader />

        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
            Our Locations
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Find a Sharks Fish & Chicken location near you. We're proud to serve
            fresh, delicious fried chicken and seafood across Illinois and
            Indiana.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {LOCATIONS.map((location, index) => {
            // Map different store images to each location
            const storeImages = [
              '/store_image2.jpeg', // Lansing
              '/store_image1.jpeg', // Merrilville
              '/store_image3.jpeg', // Sauk Village
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
                        <h3 className="font-bold text-gray-900 text-lg">
                          Store Hours
                        </h3>
                      </div>

                      <div className="space-y-2">
                        {Object.entries(location.hours).map(([days, hours]) => (
                          <div
                            key={days}
                            className="flex justify-between items-center py-2 px-3 bg-white rounded-lg shadow-sm"
                          >
                            <span className="font-medium text-gray-700 text-sm whitespace-nowrap">
                              {days}
                            </span>
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

        {/* Additional Info Section */}
        <div className="mt-16 text-center max-w-6xl mx-auto">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-blue-600/5 rounded-3xl"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Sharks Fish & Chicken?
              </h2>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🍗</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Fresh Daily
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    All our chicken and fish is prepared fresh daily with our
                    secret seasoning blend and premium ingredients
                  </p>
                </div>

                <div className="group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🚗</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Fast Service
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Quick pickup, delivery, and dine-in options available at all
                    locations with efficient service
                  </p>
                </div>

                <div className="group">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Family Owned
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Serving the community with pride for years, bringing
                    authentic flavors and family recipes to your table
                  </p>
                </div>
              </div>

              <div className="mt-10 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-lg px-8"
                >
                  <Link href="/menu-gallery">Browse Our Menu</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Proudly Serving Illinois & Indiana
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['Lansing, IL', 'Merrillville, IN', 'Sauk Village, IL'].map(
                (area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 rounded-full text-sm font-medium border border-teal-200/50"
                  >
                    {area}
                  </span>
                )
              )}
            </div>
            <p className="text-gray-600 mt-6 leading-relaxed">
              Contact your nearest location to confirm delivery availability in
              your area. We're always expanding our delivery radius to serve
              more communities!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
