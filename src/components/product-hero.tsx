import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ProductHero() {
  return (
    <div className="relative text-black">
      {/* Hero Image Section */}
      <div className="flex justify-center">
        <Image
          src="/images/bg-image.png"
          alt="Nike Air Max Pulse sneaker on blue gradient background"
          width={1200}
          height={700}
          className='bg-position:center'
        />
      </div>

      {/* Hero Content Section */}
      <div className="relative container mx-auto px-4 py-12 z-10">
        <div className="flex flex-col items-center space-y-6 text-center">
          <span className="text-sm font-semibold">First Look</span>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            NIKE AIR MAX PULSE
          </h1>
          <p className="max-w-2xl text-lg">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse — 
            designed to push you past your limits and help you go to the max.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="rounded-full border-white bg-black px-8 py-3 text-white hover:bg-white hover:text-black"
              aria-label="Notify Me about Air Max Pulse"
            >
              Notify Me
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white bg-black px-8 py-3 text-white hover:bg-white hover:text-black"
              aria-label="Shop Air Max Pulse"
            >
              Shop Air Max
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}