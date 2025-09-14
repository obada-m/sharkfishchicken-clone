"use client";

import React, { useState } from "react";
import { ArrowLeft, MapPin, Clock, Car, Store, Truck, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LOCATIONS } from "@/lib/menu-data";
import { useCart } from "@/lib/cart-context";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import Link from "next/link";

type OrderType = 'pickup' | 'delivery' | 'dine-in' | 'curbside';
type TimingType = 'asap' | 'scheduled';

export default function OrderPage() {
  const { state } = useCart();
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [orderType, setOrderType] = useState<OrderType>('pickup');
  const [timingType, setTimingType] = useState<TimingType>('asap');
  const [scheduledDate, setScheduledDate] = useState<string>('');
  const [scheduledTime, setScheduledTime] = useState<string>('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    specialInstructions: ''
  });

  const selectedLocationData = LOCATIONS.find(loc => loc.id === selectedLocation);

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  const getEstimatedTime = () => {
    switch (orderType) {
      case 'pickup':
        return '15-25 minutes';
      case 'delivery':
        return '25-40 minutes';
      case 'dine-in':
        return '10-20 minutes';
      case 'curbside':
        return '15-25 minutes';
      default:
        return '15-25 minutes';
    }
  };

  const canProceed = selectedLocation && state.items.length > 0 && customerInfo.name && customerInfo.phone;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <NavigationHeader />
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Add some delicious items from our menu to place an order.</p>
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/menu-gallery">Browse Menu</Link>
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

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
              <p className="text-gray-600">{state.itemCount} items • ${state.total.toFixed(2)}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Configuration */}
            <div className="space-y-6">
              {/* Location Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Choose Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedLocation} onValueChange={setSelectedLocation}>
                    {LOCATIONS.map(location => (
                      <div key={location.id} className="flex items-start space-x-3">
                        <RadioGroupItem value={location.id} id={location.id} className="mt-1" />
                        <Label htmlFor={location.id} className="flex-1 cursor-pointer">
                          <div>
                            <p className="font-medium">{location.name}</p>
                            <p className="text-sm text-gray-600">{location.address}</p>
                            <p className="text-sm text-gray-500">{location.phone}</p>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Order Type Selection */}
              {selectedLocation && (
                <Card>
                  <CardHeader>
                    <CardTitle>Order Type</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={orderType} onValueChange={(value) => setOrderType(value as OrderType)}>
                      <div className="grid grid-cols-2 gap-4">
                        <Label htmlFor="pickup" className="cursor-pointer">
                          <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                            <RadioGroupItem value="pickup" id="pickup" />
                            <div className="flex items-center gap-2">
                              <Store className="h-4 w-4 text-teal-600" />
                              <span>Pickup</span>
                            </div>
                          </div>
                        </Label>

                        <Label htmlFor="delivery" className="cursor-pointer">
                          <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                            <RadioGroupItem value="delivery" id="delivery" />
                            <div className="flex items-center gap-2">
                              <Truck className="h-4 w-4 text-teal-600" />
                              <span>Delivery</span>
                            </div>
                          </div>
                        </Label>

                        <Label htmlFor="dine-in" className="cursor-pointer">
                          <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                            <RadioGroupItem value="dine-in" id="dine-in" />
                            <div className="flex items-center gap-2">
                              <Store className="h-4 w-4 text-teal-600" />
                              <span>Dine In</span>
                            </div>
                          </div>
                        </Label>

                        <Label htmlFor="curbside" className="cursor-pointer">
                          <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                            <RadioGroupItem value="curbside" id="curbside" />
                            <div className="flex items-center gap-2">
                              <Car className="h-4 w-4 text-teal-600" />
                              <span>Curbside</span>
                            </div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              )}

              {/* Timing Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    When do you need it?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={timingType} onValueChange={(value) => setTimingType(value as TimingType)}>
                    <div className="space-y-3">
                      <Label htmlFor="asap" className="cursor-pointer">
                        <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value="asap" id="asap" />
                          <div>
                            <p className="font-medium">ASAP</p>
                            <p className="text-sm text-gray-600">Ready in {getEstimatedTime()}</p>
                          </div>
                        </div>
                      </Label>

                      <Label htmlFor="scheduled" className="cursor-pointer">
                        <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value="scheduled" id="scheduled" />
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-teal-600" />
                            <span className="font-medium">Schedule Order</span>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {timingType === 'scheduled' && (
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={scheduledDate}
                          onChange={(e) => setScheduledDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Time</Label>
                        <Input
                          id="time"
                          type="time"
                          value={scheduledTime}
                          onChange={(e) => setScheduledTime(e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Customer Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={customerInfo.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={customerInfo.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <div>
                      <Label htmlFor="address">Delivery Address *</Label>
                      <Input
                        id="address"
                        value={customerInfo.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Full delivery address"
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="instructions">Special Instructions (Optional)</Label>
                    <Textarea
                      id="instructions"
                      value={customerInfo.specialInstructions}
                      onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                      placeholder="Any special requests or delivery instructions..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-4">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  {selectedLocationData && (
                    <p className="text-sm text-gray-600">
                      {selectedLocationData.name} • {orderType} • {timingType === 'asap' ? getEstimatedTime() : 'Scheduled'}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {state.items.map((item, index) => (
                      <div key={`${item.id}-${index}`} className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-600">
                            Qty: {item.quantity} • ${item.price.toFixed(2)} each
                          </p>
                          {item.selectedSeasoning && (
                            <p className="text-xs text-gray-500">Seasoning: {item.selectedSeasoning}</p>
                          )}
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}

                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${state.total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax:</span>
                        <span>${(state.total * 0.08).toFixed(2)}</span>
                      </div>
                      {orderType === 'delivery' && (
                        <div className="flex justify-between">
                          <span>Delivery Fee:</span>
                          <span>$2.99</span>
                        </div>
                      )}
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total:</span>
                          <span className="text-teal-600">
                            ${(state.total * 1.08 + (orderType === 'delivery' ? 2.99 : 0)).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 space-y-3">
                      {selectedLocationData && (
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <a href={`tel:${selectedLocationData.phone}`}>
                            <Phone className="h-4 w-4 mr-2" />
                            Call {selectedLocationData.name}
                          </a>
                        </Button>
                      )}

                      <Button 
                        size="lg" 
                        className="w-full bg-teal-600 hover:bg-teal-700" 
                        disabled={!canProceed}
                      >
                        {canProceed ? 'Proceed to Payment' : 'Complete Required Fields'}
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        By placing this order, you agree to our terms of service. 
                        We accept cash, card, and digital payments.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}