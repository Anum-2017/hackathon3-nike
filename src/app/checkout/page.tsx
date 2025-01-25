'use client'

import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import Image from 'next/image';

const Checkout = () => {
  const [pan, setPan] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  // Set the delivery fee to 0 (free) without condition
  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="container mx-auto px-[100px] py-6">
      <div className="flex flex-col lg:flex-row justify-between lg:gap-[120px] max-w-[1380px] mx-auto">
        {/* Left Section */}
        <div className="w-full lg:w-[430px] flex-shrink-0 mb-8 lg:mb-0">
          {/* Order Details */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-5">
              How would you like to get your order?
            </h2>
            <p className="text-medium mb-5">
              Customs regulation for India requires a copy of the recipient&apos;s
              KYC. The address on the KYC needs to match the shipping address.
              Our courier will contact you via SMS/email to obtain a copy of
              your KYC. The KYC will be stored securely and used solely for the
              purpose of clearing customs (including sharing it with customs
              officials) for all orders and returns. If your KYC does not match
              your shipping address, please click the link for more information.{" "}
              <a href="#" className="text-blue-600 underline">
                Learn More
              </a>
            </p>
            <input
              type="text"
              placeholder="Deliver it"
              className="w-full h-[55px] px-4 border border-gray-300 rounded-md"
            />
          </div>

          {/* Address Form */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-5">
              Enter your name and address:
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full h-[55px] px-4 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-[55px] px-4 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Address Line 1"
                className="w-full h-[55px] px-4 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Address Line 2"
                className="w-full h-[55px] px-4 border border-gray-300 rounded-md"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-1/2 h-[55px] px-4 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Locality"
                  className="w-1/2 h-[55px] px-4 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex gap-4">
                <select className="w-1/2 h-[55px] px-4 border border-gray-300 rounded-md">
                  <option>State/Territory</option>
                </select>
                <select className="w-1/2 h-[55px] px-4 border border-gray-300 rounded-md">
                  <option>India</option>
                </select>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-5">
              What&apos;s your contact information?
            </h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[55px] px-4 border border-gray-300 rounded-md mb-4"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full h-[55px] px-4 border border-gray-300 rounded-md"
            />
          </div>

          {/* PAN Information */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-5">What&apos;s your PAN?</h2>
            <input
              type="text"
              placeholder="PAN"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              className="w-full h-[55px] px-4 border border-gray-300 rounded-md mb-2"
            />
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="mr-2"
              />
              <label>Save PAN details to profile</label>
            </div>
            <button
              className="w-full h-[55px] bg-[#d9dada] text-[#515050] rounded-3xl font-medium"
              onClick={() => alert("Continue clicked!")}
            >
              Continue
            </button>
            <button
              className="w-full h-[55px] bg-[#d9dada] text-[#515050] rounded-3xl font-medium mt-4">
              {/* onClick={() => alert("Continue clicked!") */}
              Payment
            </button>
            <div className="space-y-4 mt-8 w-full">
              <p className="border-b-[1.5px] border-[#d1d2d2] pb-4 text-black font-medium">
                Delivery
              </p>
              <p className="border-b-[1.5px] border-[#d1d2d2] pb-4 text-[#727272] font-medium">
                Shipping
              </p>
              <p className="border-b-[1.5px] border-[#d1d2d2] pb-4 text-[#727272] font-medium">
                Billing
              </p>
              <p className="border-b-[1.5px] border-[#d1d2d2] pb-4 text-[#727272] font-medium">
                Payment
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}

        <div className="w-full lg:w-[350px] flex-shrink-0">
          <div className="p-4 rounded-lg">
            <h1 className="text-lg font-medium mb-5">Order Summary</h1>

            {/* Order Items */}
            <div className="space-y-6 mb-8">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-6">
                  <Image
                    src={item.image}
                    alt={item.productName}
                    width={100}  // You can adjust the width
                    height={100} // Adjust the height as well
                    className="w-20 h-20 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">{item.productName}</h3>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    <p className="text-sm font-medium">₹ {Number(item.price).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-4 border-t border-gray-200 pt-6">
              <div className="flex justify-between text-lg">
                <span>Subtotal</span>
                <span>₹ {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Delivery</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-medium border-t border-gray-200 pt-4 mb-6 border-b-2"> 
                <span>Total</span>
                <span>₹ {total.toLocaleString()}</span>
              </div>
            </div>

            <div>
              <p className="font-medium mb-4 mt-4">
                Arrives Mon, 27 Mar - Wed, 12 Apr
              </p>
              <div className="flex mb-4">
               <Image
                  src="/images/G2.png"
                  alt="Product Image"
                  width={208}
                  height={208}
                  className="object-cover mr-4"
                /> 
                <div className="max-w-[80px]">
                  <p className="text-sm font-medium">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </p>
                  <p className="text-sm">Qty 1 | Size L</p>
                  <p className="text-sm">₹ 3,895.00</p>
                </div>
              </div>
              <div className="flex">
                <Image
                  src="/images/best2.png"
                  alt="Product Image"
                  width={208}
                  height={208}
                  className="object-cover mr-4"
                />
                <div className="max-w-[80px]">
                  <p className="text-sm font-medium">Nike Air Max 97 SE</p>
                  <p className="text-sm">Qty 1 | Size UK 8</p>
                  <p className="text-sm">₹ 8,595.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
