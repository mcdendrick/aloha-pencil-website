"use client";
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Layout from '@/components/Layout';

const LandingPage = () => {
  const products = [
    { name: 'Koa Wood', description: 'Handcrafted from sustainable Hawaiian Koa', price: '$45', image: '/koa-wood-2.png' },
    { name: 'Mango Wood', description: 'Elegant writing from Mango wood', price: '$65', image: '/mango-wood-website.png' },
    { name: 'Monkeypod', description: 'Smooth and silky Monkeypod', price: '$75', image: '/monkeypod-hawaiian-wood.png' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
              Luxury writing instruments crafted from native Hawaiian woods
            </h1>
            <p className="text-xl text-green-600 mb-4">
              Experience the beauty of Hawaii in every stroke
            </p>
            <Image src="/aloha-pencil-logo.png" alt="Aloha Pencil Company" width={400} height={400} className="mx-auto mb-4 shadow-xl" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-green-800">
            Our Best Sellers
          </h2>
          <button className="bg-green-600 text-white px-8 py-2 rounded-lg text-lg hover:bg-green-500 transition-colors">
              Explore Full Collection
            </button>
          </div>
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
                    <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors">
                      <ShoppingCart size={20} />
                      Add to Cart
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LandingPage;