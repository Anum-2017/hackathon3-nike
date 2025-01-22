import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Featured() {
  return (
    <section className="relative text-black">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-sm font-semibold mb-4">Featured</h2>

        <div className="flex flex-col items-center">
          <Image
            src="/images/Featured-image.png"
            alt="Featured running shoes on a colorful background"
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              STEP INTO WHAT FEELS GOOD
            </h1>
            <p className="text-lg mb-6">Because everyone should know the feeling of running in that perfect pair.</p>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-black bg-black text-white hover:bg-white hover:text-black transition-colors"
            >
              Find Your Shoe
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

