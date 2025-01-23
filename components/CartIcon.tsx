import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export const CartIcon = () => {
  const { items } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative">
      <ShoppingCart className="h-6 w-6 text-green-700" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </div>
  );
}; 