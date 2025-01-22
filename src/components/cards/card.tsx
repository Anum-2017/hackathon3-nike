import Image from "next/image";
import Link from "next/link";
import React from "react";

type Product = {
  id: number;
  productName: string;
  category: string;
  price: string;
  colors: string[];
  imageUrl: string;
  description: string;
};

const Card: React.FC<Product> = ({
  id,
  category,
  productName,
  colors,
  price,
  imageUrl,
}) => {
  return (
    <div className="mb-6 md:mb-6 m-auto md:m-0 px-2 focus-visible:outline-none">
      <Link href={`/all-products/${id}`}
      >
        <Image className="focus-visible:outline-none" src={imageUrl} alt={productName} width={300} height={300} />
      <div className="py-4 focus-visible:outline-none">
        <h4 className="text-[#9E3500]">{category}</h4>
        <h2 className="font-semibold">{productName}</h2>
        <p className="text-text-secondary-gray">{colors}</p>
      </div>
      <h3 className="font-semibold focus-visible:outline-none">MRP: &#8377; {price}</h3>
      </Link>
    </div>
  );
};

export default Card; 
