"use client";
import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CartIcon } from './CartIcon';
import { CartPreview } from './CartPreview';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  // Close menu when cart is opened on mobile
  const handleCartOpen = () => {
    setIsCartOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-green-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                <Image src="/aloha-pencil-logo.png" alt="Aloha Pencil Company" width={32} height={32} className="h-8 w-auto" /> 
                <span className="ml-2 text-green-800 font-bold">Aloha Pencil Company</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-green-700 hover:text-green-500">{t.nav.home}</Link>
                <Link href="/products" className="text-green-700 hover:text-green-500">{t.nav.products}</Link>
                <Link href="/about" className="text-green-700 hover:text-green-500">{t.nav.about}</Link>
                <Link href="/contact" className="text-green-700 hover:text-green-500">{t.nav.contact}</Link>
                <LanguageSwitcher />
              </div>
              
              <div className="relative ml-8">
                <button 
                  onClick={() => setIsCartOpen(!isCartOpen)} 
                  className="p-2 hover:bg-green-50 rounded-full transition-colors"
                >
                  <CartIcon />
                </button>
                <CartPreview isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu Panel */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <Link 
                  href="/" 
                  className="block px-3 py-2 text-green-700 hover:text-green-500 hover:bg-green-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.home}
                </Link>
                <Link 
                  href="/products" 
                  className="block px-3 py-2 text-green-700 hover:text-green-500 hover:bg-green-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.products}
                </Link>
                <Link 
                  href="/about" 
                  className="block px-3 py-2 text-green-700 hover:text-green-500 hover:bg-green-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.about}
                </Link>
                <Link 
                  href="/contact" 
                  className="block px-3 py-2 text-green-700 hover:text-green-500 hover:bg-green-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.contact}
                </Link>
                <button 
                  onClick={handleCartOpen}
                  className="w-full flex items-center px-3 py-2 text-green-700 hover:text-green-500 hover:bg-green-50 rounded-md"
                >
                  <CartIcon />
                  <span className="ml-2">{t.cart.menutitle}</span>
                </button>
                <div className="px-3 py-2">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Cart Preview */}
      {isCartOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <CartPreview isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{t.footer.contact}</h3>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <p>1 (866) 365-1989</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Mail size={16} />
                <p>Info@AlohaPencil.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t.nav.quickLinks}</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-green-300">{t.nav.about}</Link></li>
                <li><Link href="/products" className="hover:text-green-300">{t.nav.products}</Link></li>
                <li><Link href="/contact" className="hover:text-green-300">{t.nav.contact}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t.footer.newsletter}</h3>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder={t.footer.emailPlaceholder}
                  className="px-4 py-2 rounded-lg text-black flex-1"
                />
                <button className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500">
                  {t.footer.subscribe}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 