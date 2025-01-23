"use client";
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function ProductsPage() {
  const { addToCart } = useCart();
  
  const products = [
    { name: 'Koa Wood', description: 'Handcrafted from sustainable Hawaiian Koa', price: '$45', image: '/koa-wood-2.png' },
    { name: 'Mango Wood', description: 'Elegant writing from Mango wood', price: '$65', image: '/mango-wood-website.png' },
    { name: 'Monkeypod', description: 'Smooth and silky Monkeypod', price: '$75', image: '/monkeypod-hawaiian-wood.png' },
    // Add more products as needed
  ];

  return (
    <Layout>
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8">Our Products</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-green-600 mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-green-800">
                      {product.price}
                    </span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors"
                    >
                      <ShoppingCart size={20} />
                      Add to Cart
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}