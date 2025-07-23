'use client';

import { useState } from 'react';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product, useCartStore } from '@/lib/cart-store';
import { toast } from 'sonner';

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    toast.success(`${quantity} ${product.name} agregado${quantity > 1 ? 's' : ''} al carrito! 🎉`, {
      description: `Total: $${(product.price * quantity).toLocaleString()}`,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 font-medium">Cantidad:</span>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="h-10 w-10 rounded-full border-pastel-pink hover:bg-pastel-pink/20"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
            className="h-10 w-10 rounded-full border-pastel-pink hover:bg-pastel-pink/20"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Button
        onClick={handleAddToCart}
        className="w-full bg-gradient-to-r from-bright-pink to-bright-purple hover:from-bright-purple hover:to-bright-pink text-white font-bold py-4 rounded-full text-lg transform hover:scale-105 transition-all shadow-lg"
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        Agregar al Carrito - ${(product.price * quantity).toLocaleString()}
      </Button>
    </div>
  );
}