"use client";
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { useCart } from '@/contexts/CartContext';
import { AddToCartToast } from './AddToCartToast';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';

const LandingPage = () => {
  const { addToCart } = useCart();
  const [toastVisible, setToastVisible] = useState(false);
  const [addedProduct, setAddedProduct] = useState('');
  const { language } = useLanguage();
  const t = translations[language];

  const products = [
    { 
      ...t.home.products.cards.koaWood,
      price: '$45', 
      image: '/koa-wood-2.png' 
    },
    { 
      ...t.home.products.cards.mangoWood,
      price: '$65', 
      image: '/mango-wood-website.png' 
    },
    { 
      ...t.home.products.cards.monkeypod,
      price: '$75', 
      image: '/monkeypod-hawaiian-wood.png' 
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
              {t.home.hero.title}
            </h1>
            <p className="text-xl text-green-600 mb-4">
              {t.home.hero.subtitle}
            </p>
            <Image src="/aloha-pencil-logo.png" alt="Aloha Pencil Company" width={400} height={400} className="mx-auto mb-4 shadow-xl" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop "View All" button */}
          <div className="hidden sm:flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-green-800">
              {t.home.products.title}
            </h2>
            <Link 
              href="/products" 
              className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-500 transition-colors"
            >
              {t.home.products.viewAll}
            </Link>
          </div>
          
          {/* Mobile heading */}
          <h2 className="sm:hidden text-3xl font-bold text-green-800 text-center mb-8">
            {t.home.products.title}
          </h2>

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
                      onClick={() => {
                        addToCart(product);
                        setAddedProduct(product.name);
                        setToastVisible(true);
                      }}
                      className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors"
                    >
                      <ShoppingCart size={20} />
                      {t.home.products.addToCart}
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile "View All" button */}
          <div className="sm:hidden mt-8 text-center">
            <Link 
              href="/products" 
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-500 transition-colors w-full"
            >
              {t.home.products.viewAll}
            </Link>
          </div>
        </div>
      </section>

      <AddToCartToast 
        isVisible={toastVisible} 
        onClose={() => setToastVisible(false)} 
        productName={addedProduct}
      />
    </Layout>
  );
};

export default LandingPage;