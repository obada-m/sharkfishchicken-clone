'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function NavigationHeader() {
  return (
    <header className="sticky top-0 z-50 flex h-16 sm:h-20 w-full items-center border-b-[1px] border-b-gray-200 bg-white">
      <div className="container flex w-full items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center"
          title="Sharks Fish & Chicken - Go to home page"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden">
              <Image
                src="/image_001.png"
                alt="Sharks Fish & Chicken Logo"
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl text-gray-900">
                Sharks
              </span>
              <span className="text-xs sm:text-sm text-gray-600 -mt-1">
                Fish & Chicken
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/menu-gallery"
            className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Menu
          </Link>
          <Link
            href="/locations"
            className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Locations
          </Link>
          <Link
            href="/story"
            className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Our Story
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-10 w-10 p-0 rounded-lg border-gray-200"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                </div>

                <nav className="flex-1 p-6 space-y-1">
                  <Link
                    href="/"
                    className="block px-4 py-3 text-lg font-medium text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    🏠 Home
                  </Link>
                  <Link
                    href="/menu-gallery"
                    className="block px-4 py-3 text-lg font-medium text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    📋 Menu
                  </Link>
                  <Link
                    href="/locations"
                    className="block px-4 py-3 text-lg font-medium text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    📍 Locations
                  </Link>
                  <Link
                    href="/story"
                    className="block px-4 py-3 text-lg font-medium text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    📖 Our Story
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
