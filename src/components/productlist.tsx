import React, { useEffect, useState } from 'react';
import Card from './cards/card';
import { client } from '../sanity/lib/client';

 export interface Product {
  _id: number;
  productName: string;
  category: string;
  price: string;
  inventory: number; 
  colors: string[];
  imageUrl: string;
  description: string;
}

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchProducts = async () => {
        const query = `
          *[_type == "product"]{
            _id,
            productName,
            category, 
            price,
            inventory,
            colors,
            status, 
            "imageUrl": image.asset->url,
            description 
          }
        `;
  
        try {
          setLoading(true);
          const result = await client.fetch(query);
          setProducts(result);
        } catch (err) {
          console.error(err);
          setError('Failed to fetch products');
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pb-10 border-b-2">
      {products.map((product) => (
        <Card
          key={product._id}
          id={product._id} 
          productName={product.productName}
          category={product.category} 
          description={product.description} 
          price={product.price}
          colors={product.colors}     
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;