"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <Link href="/contact" className="text-green-700 hover:text-green-500">Contact</Link>
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

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

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
                <li><Link href="/about" className="hover:text-green-300">About Us</Link></li>
                <li><Link href="/products" className="hover:text-green-300">Products</Link></li>
                <li><Link href="/contact" className="hover:text-green-300">Contact</Link></li>
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

export default Layout; 