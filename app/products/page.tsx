"use client";
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { AddToCartToast } from '@/components/AddToCartToast';

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [toastVisible, setToastVisible] = useState(false);
  const [addedProduct, setAddedProduct] = useState('');
  
  const products = [
    {
      name: 'Koa Wood',
      scientificName: 'Acacia koa',
      description: 'Koa wood has rich hues from light brown to deep reddish brown. Koa trees grow only in Hawaii. It is illegal to cut down Koa trees, or to plant new Koa groves. Koa can only grow naturally and die naturally. It may only be harvested when it falls or is dying. Consequently, Koa wood is scarce and valuable.',
      price: '$45',
      image: '/koa-wood-2.png',
      treeImage: '/koa-tree.png'
    },
    {
      name: 'Mango Wood',
      scientificName: 'Mangifera indica',
      description: 'Mango wood has a warm blend color, with mottled variations, wavy and curly figures. The fruit is sweet, and like the wood, brings warmth and character to any creation.',
      price: '$65',
      image: '/mango-wood-website.png',
      treeImage: '/mango-tree.jpg'
    },
    {
      name: 'Monkeypod',
      scientificName: 'Samanea saman',
      description: 'Varying from yellow to dark chocolate brown when cut, generally drying to a light golden brown with dark streaks. Monkeypod trees offer extensive shade and beautiful character to the wood.',
      price: '$75',
      image: '/monkeypod-hawaiian-wood.png',
      treeImage: '/monkeypod-tree.png'
    },
  ];

  return (
    <Layout>
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Native Hawaiian Woods</h1>
          <p className="text-lg text-green-700 mb-8">
            Our luxury writing instruments are crafted from these carefully selected Hawaiian woods, 
            each with its own unique characteristics and story.
          </p>
          
          <div className="space-y-12">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-6 p-6">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold text-green-800 mb-1">{product.name}</h2>
                        <p className="text-sm italic text-green-600 mb-4">{product.scientificName}</p>
                        <p className="text-green-700">{product.description}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-green-800">{product.price}</span>
                        <button 
                          onClick={() => {
                            addToCart(product);
                            setAddedProduct(product.name);
                            setToastVisible(true);
                          }}
                          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors"
                        >
                          <ShoppingCart size={20} />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Image
                        src={product.treeImage}
                        alt={`${product.name} Tree`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <Image
                        src={product.image}
                        alt={`${product.name} Wood Grain`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <AddToCartToast 
        isVisible={toastVisible} 
        onClose={() => setToastVisible(false)} 
        productName={addedProduct}
      />
    </Layout>
  );
}