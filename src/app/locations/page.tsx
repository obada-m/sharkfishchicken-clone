import React from 'react';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
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
            src="/image_016.png"
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
            Find a Sharks Fish & Chicken location near you. We're proud to serve fresh, delicious fried chicken and seafood across Illinois and Indiana.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {LOCATIONS.map((location, index) => {
            // Map different store images to each location
            const storeImages = [
              "/store_image1.jpeg", // Lansing
              "/store_image2.jpeg", // Merrilville
              "/store_image3.jpeg", // Sauk Village
            ];

            return (
              <Card
                key={location.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                {/* Location Image Header */}
                <div className="relative h-48">
                  <Image
                    src={storeImages[index] || "/store_image1.jpeg"}
                    alt={`${location.name} Restaurant`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{location.name}</h2>
                    <p className="text-white/90 text-sm drop-shadow-md">{location.address}</p>
                  </div>
                </div>

              <CardContent className="p-6">
                <div className="space-y-5">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-teal-50 rounded-lg p-3">
                      <div className="text-teal-600 font-bold text-lg">10+</div>
                      <div className="text-xs text-gray-600">Years Serving</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-blue-600 font-bold text-lg">5mi</div>
                      <div className="text-xs text-gray-600">Delivery Radius</div>
                    </div>
                  </div>

                  {/* Contact Info */}
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
                        <p className="font-medium text-gray-900 mb-2">Store Hours</p>
                        <div className="text-sm text-gray-600 space-y-1">
                          {Object.entries(location.hours).map(([days, hours]) => (
                            <div key={days} className="flex justify-between items-center">
                              <span className="font-medium">{days}</span>
                              <span className="text-teal-600">{hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg"
                      size="lg"
                    >
                      <a href={`#`} rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5 mr-2" />
                        Order Online
                      </a>
                    </Button>

                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" asChild className="border-teal-200 text-teal-700 hover:bg-teal-50">
                        <a
                          href={location.googleMapsUrl || `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MapPin className="h-4 w-4 mr-2" />
                          Directions
                        </a>
                      </Button>

                      <Button variant="outline" asChild className="border-blue-200 text-blue-700 hover:bg-blue-50">
                        <a href={`tel:${location.phone}`}>
                          <Phone className="h-4 w-4 mr-2" />
                          Call Now
                        </a>
                      </Button>
                    </div>
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
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Fresh Daily</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All our chicken and fish is prepared fresh daily with our secret seasoning blend and premium ingredients
                  </p>
                </div>

                <div className="group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🚗</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Fast Service</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Quick pickup, delivery, and dine-in options available at all locations with efficient service
                  </p>
                </div>

                <div className="group">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Family Owned</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Serving the community with pride for years, bringing authentic flavors and family recipes to your table
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-lg px-8"
                >
                  <Link href="/menu-gallery">Browse Our Menu</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-2 border-teal-200 text-teal-700 hover:bg-teal-50"
                >
                  <Link href="/order">Order Online</Link>
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
              {['Lansing, IL', 'Merrillville, IN', 'Sauk Village, IL', 'Chicago Heights', 'Hammond, IN', 'Calumet City'].map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 rounded-full text-sm font-medium border border-teal-200/50"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mt-6 leading-relaxed">
              Contact your nearest location to confirm delivery availability in your area.
              We're always expanding our delivery radius to serve more communities!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
