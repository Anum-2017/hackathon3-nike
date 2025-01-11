import { PromoBanner } from "@/components/promo-banner" 
import { ProductHero } from "@/components/product-hero"
import Best from "@/components/bestAirmax"
 import { Featured } from "@/components/featured-banner"
import GearUp from "@/components/gearUp" 
import DontMiss from "@/components/dontmiss"
import Essentials from "@/components/essential"
import List from "@/components/list"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
   <PromoBanner /> 
      <main>
    <ProductHero />
    <Best />
    <Featured/>
    <GearUp/> 
    <DontMiss/>
    <Essentials/>
    <List/> 
      </main>
    
    </div>
)
}