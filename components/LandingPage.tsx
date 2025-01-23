"use client";
import React, { useState} from 'react';
import {  ShoppingCart, Menu, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    { name: 'Koa Wood', description: 'Handcrafted from sustainable Hawaiian Koa', price: '$45', image: '/koa-wood-2.png' },
    { name: 'Mango Wood', description: 'Elegant writing from Mango wood', price: '$65', image: '/mango-wood-website.png' },
    { name: 'Monkeypod', description: 'Smooth and silky Monkeypod', price: '$75', image: '/monkeypod-hawaiian-wood.png' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-green-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image src="/aloha-pencil-logo.png" alt="Aloha Pencil Company" width={32} height={32} className="h-8 w-auto" /> 
              <span className="ml-2 text-green-800 font-bold">Aloha Pencil Company</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-green-700 hover:text-green-500">Home</Link>
              <Link href="/products" className="text-green-700 hover:text-green-500">Products</Link>
              <Link href="/about" className="text-green-700 hover:text-green-500">About</Link>
              <a href="/contact" className="text-green-700 hover:text-green-500">Contact</a>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors">
                Shop Now
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow pt-24 pb-4 px-4 sm:px-6 lg:px-8">
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

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>1 (866) 365-1989</p>
              <p>Info@AlohaPencil.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-300">About Us</a></li>
                <li><a href="#" className="hover:text-green-300">Products</a></li>
                <li><a href="#" className="hover:text-green-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg text-black flex-1"
                />
                <button className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center">
            <p>&copy; 2024 Aloha Pencil Company, LLC</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;