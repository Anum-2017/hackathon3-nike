import Image from "next/image"
import dontmiss from "../../public/images/dont-miss.png"
import { Button } from "./ui/button"

export default function DontMiss(){
    return(
        <div>
        <div className="mt-10">
            <p className="font-semibold ml-6 text-sm ">Don&apos;t Miss</p>
            <div className="pl-5 pr-5 pt-2 pb-5 flex justify-center ">
                <Image src={dontmiss} alt="featured" />
            </div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mb-2 ">
                <h1 className="text-[20px] sm:text-[36px] lg:text-[48px] xl:text-[52px] text-center font-bold">FLIGHT ESSENTIALS</h1>
            </div>
        </div>
        <p className="text-[9px] text-center px-2 xl:text-[18px] lg:text-[16px] sm:text-[14px]">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
        
        <div className="flex mt-4 justify-center items-center gap-2">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-black bg-black text-white hover:bg-white hover:text-black transition-colors"
            >
              Shop
            </Button>
    </div>
    <div className="mt-4" />  
</div>
    )
}