import React from 'react';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import { X } from 'lucide-react';

export const CartPreview = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { items, removeFromCart, updateQuantity } = useCart();
  const total = items.reduce((sum, item) => sum + (Number(item.price.replace('$', '')) * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed md:absolute top-16 right-0 w-full md:w-96 bg-white h-[calc(100vh-4rem)] md:h-auto md:max-h-[32rem] overflow-auto rounded-t-lg md:rounded-lg shadow-xl">
      <div className="sticky top-0 bg-white border-b px-4 py-3 flex justify-between items-center">
        <h3 className="text-lg font-bold text-green-800">Shopping Cart</h3>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-green-50 rounded-full transition-colors"
        >
          <X size={20} className="text-gray-500" />
        </button>
      </div>
      
      {items.length === 0 ? (
        <div className="p-4">
          <p className="text-gray-500 text-center py-4">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="px-4 py-2">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-4 py-3 border-b last:border-b-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-green-800">{item.name}</h4>
                  <p className="text-sm text-green-600">{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.name, Number(e.target.value))}
                    className="border rounded p-1 text-sm"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="p-1 hover:bg-red-50 rounded-full transition-colors text-red-500"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="sticky bottom-0 bg-white border-t p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-green-800">Total:</span>
              <span className="font-bold text-green-800">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition-colors">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}; 