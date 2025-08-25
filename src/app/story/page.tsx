import React from "react";
import { Heart, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to serving communities across Illinois, discover the passion and tradition behind Sharks Fish & Chicken
          </p>
        </div>

        {/* Main Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose prose-lg mx-auto text-gray-700">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8 mb-12">
              <div className="text-center">
                <div className="text-6xl mb-4">🦈</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Born from Passion</h2>
                <p className="text-lg leading-relaxed">
                  Sharks Fish & Chicken was born from a simple passion: creating the most delicious, 
                  crispy, and flavorful fried chicken and fish that brings families and communities together. 
                  What started as a dream to serve authentic, expertly prepared soul food has grown into 
                  a beloved Illinois institution.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
                <p className="mb-4">
                  Every day, we're committed to serving fresh, golden, expertly fried chicken and fish 
                  that exceeds expectations. Using our secret blend of seasonings and time-tested cooking 
                  techniques, we create meals that bring joy to every bite.
                </p>
                <p>
                  We believe great food brings people together, and we're proud to be part of special 
                  family moments, celebrations, and everyday meals throughout our Illinois communities.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span><strong>Quality First:</strong> Fresh ingredients and authentic preparation in every meal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span><strong>Community Focus:</strong> Serving our neighbors with pride and dedication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <span><strong>Excellence:</strong> Continuously improving our recipes and service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Consistency:</strong> The same great taste and quality, every single time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes Us Special */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">What Makes Us Special</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🍗</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Secret Seasonings</h3>
                <p className="text-gray-600">
                  Our proprietary blend of spices and seasonings, perfected over years, creates 
                  the distinctive flavor that sets us apart from the rest.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎣</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Fresh Fish Daily</h3>
                <p className="text-gray-600">
                  We source the freshest fish daily, preparing catfish, ocean perch, tilapia, 
                  and jack salmon with the same care and attention as our famous chicken.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">👨‍🍳</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Preparation</h3>
                <p className="text-gray-600">
                  Each piece is hand-seasoned and cooked to golden perfection, ensuring 
                  that crispy exterior and juicy interior in every single bite.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Locations Today */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Serving Illinois Communities</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Today, we're proud to operate four locations across Illinois, each committed to the same 
            high standards and authentic flavors that made us a local favorite.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-lg text-gray-900">Posen</h3>
              <p className="text-sm text-gray-600">14727 Kedzie Ave</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-lg text-gray-900">Hazel Crest</h3>
              <p className="text-sm text-gray-600">17455 Kedzie Ave</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-lg text-gray-900">Harvey</h3>
              <p className="text-sm text-gray-600">159 W 159th St</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-lg text-gray-900">Hillside</h3>
              <p className="text-sm text-gray-600">4741 Butterfield Rd</p>
            </div>
          </div>
        </div>

        {/* Quality Promise */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Promise to You</h2>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Every time you visit Sharks Fish & Chicken, you can expect the same commitment to quality, 
              freshness, and flavor that we've maintained since day one. We use only the finest ingredients, 
              prepare everything fresh daily, and never compromise on the standards that made us who we are today.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium">✓ Fresh Daily</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium">✓ No Preservatives</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium">✓ Hand-Seasoned</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium">✓ Made to Order</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Experience the Sharks Difference</h2>
          <p className="text-lg mb-6 opacity-90">
            Ready to taste what makes us special? Visit one of our locations or order online today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/locations">Find a Location</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
              <Link href="/menu">Browse Our Menu</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}