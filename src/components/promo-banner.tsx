import Link from "next/link"

export function PromoBanner() {
  return (
    <div className="bg-gray-100 text-center py-2 px-4">
    <p className="text-sm font-bold">
      Hello Nike App
    </p>
    <p className="text-sm">
      Download the app to access everything Nike. 
      <Link href="#" className="ml-1">
        <span className="underline font-semibold">Get Your Great</span>
      </Link>
    </p>
  </div>
  
  )
}