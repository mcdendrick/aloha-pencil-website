"use client";
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { AddToCartToast } from '@/components/AddToCartToast';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [toastVisible, setToastVisible] = useState(false);
  const [addedProduct, setAddedProduct] = useState('');
  const { language } = useLanguage();
  const t = translations[language];
  
  const products = [
    {
      ...t.products.items.koaWood,
      price: '$45',
      image: '/koa-wood-2.png',
      treeImage: '/koa-tree.png'
    },
    {
      ...t.products.items.mangoWood,
      price: '$65',
      image: '/mango-wood-website.png',
      treeImage: '/mango-tree.jpg'
    },
    {
      ...t.products.items.monkeypod,
      price: '$75',
      image: '/monkeypod-hawaiian-wood.png',
      treeImage: '/monkeypod-tree.png'
    },
  ];

  return (
    <Layout>
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-4">{t.products.title}</h1>
          <p className="text-lg text-green-700 mb-8">
            {t.products.subtitle}
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
                          {t.products.addToCart}
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