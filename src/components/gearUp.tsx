"use client";

import React from "react";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  category: string;
  type: string;
  price: string;
  image: string;
};

const GearUp = () => {

  const products: Product[] = [
    {
      id: 1,
      title: "Nike Dri-FIT ADV TechKnit Ultra",
      category: "Men's Short-Sleeve",
      type: "Running Top",
      price: "₹ 3 895",
      image: "/images/G1.png",
    },
    {
      id: 2,
      title: "Nike Dri-FIT Challenger",
      category: "Men's 18cm (approx.) 2-",
      type: "in-1 Versatile Shorts",
      price: "₹ 2 495",
      image: "/images/G2.png",
    },
    {
      id: 3,
      title: "Nike Dri-FIT ADV Run Division",
      category: "Women's Long-Sleeve",
      type: "Running Top",
      price: "₹ 5 295",
      image: "/images/G3.png",
    },
    {
      id: 4,
      title: "Nike Fast",
      category: "Women's Mid-Rise 7/8 Running",
      type: "Leggings with Pockets",
      price: "₹ 3 795",
      image: "/images/G4.png",
    },
  ];

  return (
    <div className="p-6">
      {/* Section Title */}
      <p className="text-[#111111] mb-10 font-semibold text-sm">Gear Up</p>

      {/* Shop Men's and Women's Navigation */}
      <div className="flex justify-between items-center w-full mb-6">
  <div className="flex items-center gap-1">
    <h2 className="font-semibold text-sm text-left">Shop Men&apos;s</h2>
    <Image
      src="/icons/left.png"
      alt="Previous Men's"
      width={24}
      height={24}
      className="cursor-pointer"
    />
    <Image
      src="/icons/right.png"
      alt="Next Men's"
      width={24}
      height={24}
      className="cursor-pointer"
    />
  </div>

  <div className="flex items-center gap-1">
    <h2 className="font-semibold text-sm">Shop Women&apos;s</h2>
    <Image
      src="/icons/left.png"
      alt="Previous Women's"
      width={24}
      height={24}
      className="cursor-pointer"
    />
    <Image
      src="/icons/right.png"
      alt="Next Women's"
      width={24}
      height={24}
      className="cursor-pointer"
    />
  </div>
</div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-center bg-white rounded-lg p-4"
          >
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.title}
              width={270}
              height={250}
              className="rounded-md"
            />
            {/* Product Details */}
            <h3 className="font-semibold text-[#111111] text-lg mt-4">
              {product.title}
            </h3>
            <p className="text-[#757575]">{product.category}</p>
            <p className="text-[#757575]">{product.type}</p>
            <p className="text-[#111111] font-bold mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GearUp;