'use client';

import React from 'react';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import { Heart, Trash2 } from 'lucide-react';
import Link from 'next/link';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const subtotal = cart.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );

  const handleIncreaseQuantity = (id: string) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const handleDecreaseQuantity = (id: string) => {
    const item = cart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  return (
    <div>
      <div className="container mx-auto px-4 md:px-20 py-10">
        <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-700 mb-6">
          <p>
            <strong>Free Delivery</strong> <br /> Applies to orders of ₹14,000.00 or more.
            <a href="#" className="text-black underline">
              View details
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-2xl font-semibold mb-6">Bag</h2>

            {cart.length === 0 ? (
              <div className="text-center">
                <p className="mb-4">Your cart is empty. Start shopping now!</p>
                <Link href="/">
                  <button className="bg-black text-white rounded-full px-6 py-3 hover:bg-gray-800 transition">
                    Shop Now
                  </button>
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-start justify-between border-b border-gray-300 pb-6 mb-6"
                >
                  <div className="flex gap-6">
                    <Image
                      src={item.image}
                      alt={item.productName}
                      width={100}
                      height={50}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md"
                    />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">{item.productName}</h3>
                      <div className="text-lg text-gray-600">
                        <span className="font-semibold">Quantity:</span>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => handleDecreaseQuantity(item.id)}
                            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md shadow-sm transition-all duration-200 ease-in-out"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-4 h-4 text-gray-600"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 12h12"
                              />
                            </svg>
                          </button>
                          <span className="mx-4 text-xl font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => handleIncreaseQuantity(item.id)}
                            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md shadow-sm transition-all duration-200 ease-in-out"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-4 h-4 text-gray-600"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v12M6 12h12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center mt-2">
                        <button
                          aria-label="Add to Wishlist"
                          className="rounded-full p-2 hover:bg-gray-100"
                        >
                          <Heart className="h-5 w-5" />
                        </button>
                        <button
                          aria-label="Remove from Cart"
                          onClick={() => removeFromCart(item.id)}
                          className="rounded-full p-2 hover:bg-gray-100"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                    <p className="font-medium text-gray-800">MRP: ₹ {item.price}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="col-span-12 md:col-span-4">
            <h2 className="text-2xl font-semibold mb-6">Summary</h2>
            <div className="bg-gray-100 p-6 rounded-md">
              <div className="flex justify-between mb-4">
                <p>Subtotal</p>
                <p>₹ {subtotal}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Delivery</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t border-gray-300 pt-4">
                <p>Total</p>
                <p>₹ {subtotal}</p>
              </div>
            </div>
            <Link href="/checkout">
              <button className="bg-black text-white rounded-full w-full h-[60px] flex items-center justify-center shadow-md hover:bg-gray-800 transition duration-300 mt-10 font-bold">
                Member Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

