"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavigationHeader() {
  return (
    <header className="sticky top-0 z-50 flex h-20 w-full items-center border-b-[1px] border-b-gray-200 bg-white">
      <div className="container flex w-full items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          title="Sharks Fish & Chicken - Go to home page"
        >
          <Image
            src="https://static-content.owner.com/funnel/images/82964f7f-d3f9-403d-bb72-e8c8c86200f7?v=3084086027&h=56&auto=format&dpr=1"
            alt="Sharks Fish & Chicken"
            width={182}
            height={56}
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/menu"
            className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Menu
          </Link>
          <Link
            href="/events"
            className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Events
          </Link>
          <Link
            href="/our-story"
            className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Our Story
          </Link>
          <Link
            href="/gift-cards"
            className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Gift Cards
          </Link>
          <Link
            href="/careers"
            className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            We're Hiring
          </Link>
          <div className="flex items-center gap-1">
            <Link
              href="/more"
              className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              More
            </Link>
            <ChevronDown className="h-4 w-4 text-gray-700" />
          </div>
          <Link
            href="/sign-in"
            className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Sign in
          </Link>
          <Button asChild className="bg-teal-600 hover:bg-teal-700 font-medium text-white">
            <Link href="/order">Order online</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-8 pt-6">
                <Link
                  href="/menu"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Menu
                </Link>
                <Link
                  href="/events"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Events
                </Link>
                <Link
                  href="/our-story"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Our Story
                </Link>
                <Link
                  href="/gift-cards"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Gift Cards
                </Link>
                <Link
                  href="/careers"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  We're Hiring
                </Link>
                <Link
                  href="/more"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  More
                </Link>
                <Link
                  href="/sign-in"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Sign in
                </Link>
                <Button asChild size="lg" className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="/order">Order online</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}