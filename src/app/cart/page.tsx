'use client'
import React from "react";
import product38 from '../../../public/images/products/product-38.png';
import product67 from '../../../public/images/products/product-67.png';
import Image from "next/image";
import { Heart, Trash2 } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-20 py-10">
        <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-700 mb-6">
          <p>
            <strong>Free Delivery</strong> <br /> Applies to orders of ₹14,000.00 or
            more.
            <a href="#" className="text-black underline">
              View details
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-2xl font-semibold mb-6">Bag</h2>

            <div className="flex flex-col md:flex-row items-start justify-between border-b border-gray-300 pb-6 mb-6">
              <div className="flex gap-6">
                <Image src={product38} alt="Nike Dri-FIT ADV TechKnit Ultra"
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md"/>
                <div>
                  <h3 className="text-lg font-medium">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </h3>
                  <p className="text-sm text-gray-600">
                    Men&apos;s Short-Sleeve Running Top
                  </p>
                  <p className="text-sm text-gray-600">
                    Ashen Slate/Cobalt Bliss
                  </p>
                  <div className="flex gap-20 text-sm text-gray-600 mt-2">
                    <p>Size: L</p>
                    <p>Quantity: 1</p>
                  </div>
                  <div className="flex items-center  mt-2">
                   <button className="rounded-full p-2 hover:bg-gray-100">
                    <Heart className="h-5 w-5" />
                     </button>
                     <button className="rounded-full p-2 hover:bg-gray-100">
                      <Trash2 className="h-5 w-5" />
                     </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                <p className="font-medium text-gray-800">MRP: ₹3,895.00</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-between border-b border-gray-300 pb-6 mb-6">
              <div className="flex gap-6">
                  <Image src={product67} alt="Nike Dri-FIT ADV TechKnit Ultra"
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md"/>
                <div>
                  <h3 className="text-lg font-medium">Nike Air Max 97 SE</h3>
                  <p className="text-sm text-gray-600">Men&apos;s Shoes</p>
                  <p className="text-sm text-gray-600">
                    Flat Pewter/Light Bone/Black/White
                  </p>
                  <div className="flex gap-20 text-sm text-gray-600 mt-2">
                    <p>Size: 8</p>
                    <p>Quantity: 1</p>
                  </div>
                  <div className="flex items-center  mt-2">
                   <button className="rounded-full p-2 hover:bg-gray-100">
                    <Heart className="h-5 w-5" />
                     </button>
                     <button className="rounded-full p-2 hover:bg-gray-100">
                      <Trash2 className="h-5 w-5" />
                     </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                <p className="font-medium text-gray-800">MRP: ₹16,995.00</p>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <h2 className="text-2xl font-semibold mb-6">Summary</h2>
            <div className="bg-gray-100 p-6 rounded-md">
              <div className="flex justify-between mb-4">
                <p>Subtotal</p>
                <p>₹20,890.00</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t border-gray-300 pt-4">
                <p>Total</p>
                <p>₹20,890.00</p>
              </div>
            </div>
            <Link href="/checkout">
            <button className="bg-black text-white rounded-full w-[350px] h-[60px] flex items-center justify-center shadow-md hover:bg-gray-800 transition duration-300 mt-10 ml-15">
               Member Checkout
            </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;