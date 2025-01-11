import Image from "next/image";
import e1 from "../../public/images/e1.png"
import e2 from "../../public/images/e2.png"
import e3 from "../../public/images/e3.png"

export default function Essentials(){
    return(
        <section className="px-10 ">
        <h2 className="mb-4 font-bold">The Essentials</h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4 m-auto relative">
            <Image src={e1} alt="Mens Thumbnail"/>
            <div className="absolute bottom-10 left-8">
              <button className="bg-white px-6 py-2 rounded-full">Men&apos;s</button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 m-auto relative">
            <Image src={e2} alt="Womens Thumbnail"/>
            <div className="absolute bottom-10 left-8">
              <button className="bg-white px-6 py-2 rounded-full">Women&apos;s</button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 m-auto relative">
            <Image src={e3} alt="Kids Thumbnail"/>
            <div className="absolute bottom-10 left-8">
              <button className="bg-white px-6 py-2 rounded-full">Kid&apos;s</button>
            </div>
          </div>
        </div>
      </section>
    )
}