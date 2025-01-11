'use client'

import { useState } from 'react'
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Product {
  id: string
  name: string
  category: string
  price: number
  imageUrl: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Nike Air Max Pulse",
    category: "Women's Shoes",
    price: 13995,
    imageUrl: "/images/best1.png",
  },
  {
    id: "2",
    name: "Nike Air Max Pulse",
    category: "Men's Shoes",
    price: 13995,
    imageUrl: "/images/best3.png",
  },
  {
    id: "3",
    name: "Nike Air Max 97 SE",
    category: "Men's Shoes",
    price: 16995,
    imageUrl: "/images/best2.png",
  },
  {
    id: "4",
    name: "Nike Air Max Plus",
    category: "Women's Shoes",
    price: 15995,
    imageUrl: "/images/best1.png",
  },
]

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const productsPerPage = 3

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (products.length - productsPerPage + 1)
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + (products.length - productsPerPage + 1)) % 
      (products.length - productsPerPage + 1)
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-semibold">Best of Air Max</h2>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Shop
          </Button>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8"
              onClick={prevSlide}
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8"
              onClick={nextSlide}
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {products.slice(currentIndex, currentIndex + productsPerPage).map((product) => (
          <div
            key={product.id}
            className="space-y-4 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="bg-[#f5f5f5] rounded-lg overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={400}
                height={400}
                className="object-contain w-full h-auto aspect-square"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{product.name}</h3>
                <span className="text-sm">₹ {product.price.toLocaleString()}</span>
              </div>
              <p className="text-sm text-muted-foreground">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}