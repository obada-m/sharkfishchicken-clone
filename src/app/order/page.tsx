"use client";

import React from "react";
import { Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LOCATIONS } from "@/lib/menu-data";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="sm" asChild>
              <Link href="/menu-gallery">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Menu
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Place Your Order</h1>
              <p className="text-gray-600">Call your nearest location to place an order</p>
            </div>
          </div>

          <div className="grid gap-6 max-w-3xl mx-auto">
            {/* Notice Card */}
            <Card className="border-teal-200 bg-teal-50">
              <CardHeader>
                <CardTitle className="text-center text-teal-800">
                  📞 Call to Order
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-teal-700 mb-4">
                  We currently take orders by phone only. Call your nearest Sharks Fish & Chicken location to place an order for pickup or delivery!
                </p>
                <div className="text-center">
                  <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                    <Link href="/menu-gallery">
                      Browse Our Menu First
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Location Cards */}
            {LOCATIONS.map((location) => (
              <Card key={location.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {location.name}
                  </CardTitle>
                  <p className="text-gray-600">{location.address}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Phone Number */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Call to Order</p>
                        <p className="text-sm text-gray-600">Available for pickup and delivery</p>
                      </div>
                      <Button
                        asChild
                        className="bg-teal-600 hover:bg-teal-700"
                      >
                        <a href={`tel:${location.phone}`}>
                          <Phone className="h-4 w-4 mr-2" />
                          {location.phone}
                        </a>
                      </Button>
                    </div>

                    {/* Store Hours */}
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Store Hours</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        {Object.entries(location.hours).map(([days, hours]) => (
                          <div key={days} className="flex justify-between">
                            <span>{days}</span>
                            <span className="text-teal-600">{hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        asChild
                        className="border-teal-200 text-teal-700 hover:bg-teal-50"
                      >
                        <a
                          href={location.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Get Directions
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
            ))}

            {/* Additional Info */}
            <Card className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Why Call to Order?</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-2xl mb-2">🍗</div>
                    <p className="font-medium">Fresh Made</p>
                    <p className="text-teal-100">Everything cooked fresh when you order</p>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">⚡</div>
                    <p className="font-medium">Faster Service</p>
                    <p className="text-teal-100">Direct communication for quicker orders</p>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">📞</div>
                    <p className="font-medium">Personal Touch</p>
                    <p className="text-teal-100">Speak directly with our friendly staff</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}