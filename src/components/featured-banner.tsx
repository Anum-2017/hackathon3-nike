import Image from "next/image";
import { Button } from "@/components/ui/button";
    
    export function Featured() {
      return (
        <div className="relative text-black">
          {/* Small Heading Above Image */}
          <div className="px-9 mt-8 mb-4">
            <p className="text-sm font-semibold">Featured</p>
          </div>
    
          {/* Hero Image Section */}
          <div className="flex justify-center">
            <Image
              src="/images/Featured-image.png"
              alt="featured image"
              width={1200}
              height={700}
              className="bg-position:center"
            />
          </div>
    
          {/* Hero Content Section */}
          <div className="relative container mx-auto px-4 py-12 z-10">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                STEP INTO WHAT FEEL GOOD
              </h1>
              <p className="max-w-4xl text-lg">
                 Cause everyone shoud know the feeling of running in that perfect pair.
              </p> 
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  className="rounded-full border-white bg-black px-8 py-3 text-white hover:bg-white hover:text-black"
                  aria-label="Notify Me about Air Max Pulse"
                >
                  Find Your Shoe
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    