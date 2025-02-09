'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Input from '@/components/ui/input';
import { client } from '@/sanity/lib/client';
import { useCart } from '@/contexts/CartContext'; // Import Cart Context

const navItems = [
  { href: '/all-products', label: 'New & Featured' },
  { href: '#', label: 'Men' },
  { href: '#', label: 'Women' },
  { href: '#', label: 'Kids' },
  { href: '#', label: 'Sale', className: 'text-red-500 font-bold' },
  { href: '#', label: 'SNKRS' },
];

export function SiteHeader() {
  const { cart } = useCart(); // Get cart data from context
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering logic runs only after mounting
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(
        `*[_type == "product"]{
          _id,
          productName,
          category,
          price,
          "imageUrl": image.asset->url,
          description
        }`
      );
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredProducts(products);
  };

  // Calculate total cart items
  const cartItemCount = cart.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0);

  // Return null during SSR until the component is mounted on the client
  if (!isClient) return null;

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
            <Link href="#" className="hidden sm:inline hover:underline">Find a Store</Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/contact-us" className="hover:underline">Help</Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/join-us" className="hidden sm:inline hover:underline">Join Us</Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/sign-in" className="hover:underline">Sign In</Link>
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
                  className={`text-sm font-medium hover:text-gray-600 transition duration-200 ease-in-out ${item.className || ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search Box */}
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-60 pl-10 pr-8 rounded-full bg-gray-200 text-[14px]"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 hover:bg-gray-300 rounded-full"
                  onClick={clearSearch}
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </Button>
              )}
            </div>

            {/* Wishlist Icon */}
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="Favorites">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Shopping Cart with Item Count */}
            <Link href="/cart" className="relative">
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Shopping bag">
                <ShoppingBag className="h-5 w-5" />
              </Button>
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full lg:hidden" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-200 lg:bg-white">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link key={item.label} href={item.href} className={`text-lg font-medium hover:text-gray-600 transition duration-200 ease-in-out ${item.className || ''}`}>
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-6 text-center">
                  <Button variant="default" size="sm" className="w-full py-2 rounded-full bg-black text-white">
                    Sign In
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
