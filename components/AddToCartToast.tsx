"use client";
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';

export const AddToCartToast = ({ 
  isVisible, 
  onClose, 
  productName 
}: { 
  isVisible: boolean; 
  onClose: () => void; 
  productName: string;
}) => {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
        >
          <CheckCircle size={20} />
          <span>{t.toast.addedToCart.replace('{productName}', productName)}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};