import { client } from '@/sanity/lib/client';
import ProductClient from '@/components/ProductClient'; 

export interface Product {
  _id: string;
  productName: string;
  category: string;
  price: string;
  colors: string[];
  inventory: number;
  imageUrl: string;
  description: string;
}

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const query = `
  *[_type == "product" && _id == "${id}"]{
    _id,
    productName,
    category,
    price,
    inventory,
    colors,
    status,
    "imageUrl": image.asset->url,
    description
  }[0]`;

  const product: Product = await client.fetch(query);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <ProductClient product={product} />

  );
};

export default ProductPage;

