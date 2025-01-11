'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Heart, ShoppingBag, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Input from '@/components/ui/input';

const navItems = [
  { href: '#', label: 'New & Featured' },
  { href: '/all-products', label: 'Men' },
  { href: '#', label: 'Women' },
  { href: '#', label: 'Kids' },
  { href: '#', label: 'Sale', className: 'text-red-500 font-bold' },
  { href: '#', label: 'SNKRS' },
];

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 px-4 text-xs">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="block">
            <Image
              src="/icons/header-logo.png"
              alt="Jordan"
              width={250}
              height={250}
              className="h-4 w-auto sm:h-6"
            />
          </Link>
          <nav className="flex items-center space-x-2 sm:space-x-4">
            <Link href="#" className="hidden sm:inline hover:underline">
              Find a Store
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/contact-us" className="hover:underline">
              Help
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/join-us" className="hidden sm:inline hover:underline">
              Join Us
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/sign-in" className="hover:underline">
              Sign In
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Left: Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="block">
              <Image
                src="/icons/nike-logo.png"
                alt="Nike"
                width={50}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium hover:text-gray-600 transition duration-200 ease-in-out ${
                    item.className || ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Box */}
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search"
                className="w-60 pl-10 pr-4 rounded-full bg-gray-100 text-sm"
              />
            </div>
            {/* Icons */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full lg:hidden"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="Favorites">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="Shopping bag">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-200 lg:bg-white">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`text-lg font-medium hover:text-gray-600 transition duration-200 ease-in-out ${
                        item.className || ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 space-y-4">
                  <Link href="#" className="block text-sm hover:underline">
                    Find a Store
                  </Link>
                  <Link href="/contact-us" className="block text-sm hover:underline">
                    Help
                  </Link>
                  <Link href="/join-us" className="block text-sm hover:underline">
                    Join Us
                  </Link>
                  <Link href="/sign-in" className="block text-sm hover:underline">
                    Sign In
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Search Sheet for Mobile */}
      <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <SheetContent side="top" className="h-[100px]">
          <div className="flex items-center h-full">
            <div className="relative flex-1 px-4">
              <Search className="absolute left-7 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search"
                className="w-full pl-12 pr-4 rounded-full bg-gray-100 text-lg h-12"
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

