import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, Award, Users } from 'lucide-react';

export default function OurStorySection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-3">
                <div className="h-16 w-16 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
                  <img
                    src="/images/image_001.png"
                    alt="Sharks Fish & Chicken Logo"
                    className="h-12 w-12 object-contain"
                  />
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Born from Passion, Serving Communities with Pride
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                From Humble Beginnings
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sharks Fish & Chicken was born from a simple passion: creating
                the most delicious, crispy, and flavorful fried chicken and fish
                that brings families and communities together. What started as a
                dream to serve authentic, expertly prepared soul food has grown
                into a beloved institution.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Every day, we're committed to serving fresh, golden, expertly
                fried chicken and fish that exceeds expectations. Using our
                secret blend of seasonings and time-tested cooking techniques,
                we create meals that bring joy to every bite.
              </p>

              <Button
                asChild
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8"
              >
                <Link href="/story">Read Our Full Story</Link>
              </Button>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <Heart className="h-8 w-8 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Quality First
                    </h4>
                    <p className="text-gray-600">
                      Fresh ingredients and authentic preparation in every meal,
                      ensuring the same great taste and quality every single
                      time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Community Focus
                    </h4>
                    <p className="text-gray-600">
                      Serving our neighbors with pride and dedication, being
                      part of special family moments and everyday celebrations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Excellence
                    </h4>
                    <p className="text-gray-600">
                      Continuously improving our recipes and service while
                      maintaining the traditions that made us a local favorite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Serving Three Locations
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Today, we're proud to operate three locations, each committed to
                the same high standards and authentic flavors that made us a
                local favorite.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-teal-50 px-4 py-2 rounded-full text-teal-700 font-medium border border-teal-200">
                  📍 Merrilville, IN
                </span>
                <span className="bg-teal-50 px-4 py-2 rounded-full text-teal-700 font-medium border border-teal-200">
                  📍 Lansing, IL
                </span>
                <span className="bg-teal-50 px-4 py-2 rounded-full text-teal-700 font-medium border border-teal-200">
                  📍 Sauk Village, IL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
