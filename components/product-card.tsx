'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product, useCartStore } from '@/lib/cart-store';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    toast.success(`${product.name} agregado al carrito! 🎉`, {
      description: `Precio: $${product.price.toLocaleString()}`,
    });
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-2 border-pastel-pink/30 hover:border-bright-pink/50 overflow-hidden">
      <Link href={`/producto/${product.slug}`}>
        <div className="relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/80 hover:bg-white text-gray-600 hover:text-bright-pink rounded-full"
              onClick={(e) => e.preventDefault()}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          <Badge className="absolute top-2 left-2 bg-bright-pink text-white">
            {product.ageRange}
          </Badge>
        </div>
      </Link>
      
      <CardContent className="p-4">
        <Link href={`/producto/${product.slug}`}>
          <div className="space-y-2">
            <Badge variant="secondary" className="text-xs bg-pastel-purple/20 text-purple-700">
              {product.category}
            </Badge>
            <h3 className="font-semibold text-gray-800 group-hover:text-bright-pink transition-colors line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="text-2xl font-bold text-bright-pink">
                ${product.price.toLocaleString()}
              </span>
              <Button
                onClick={handleAddToCart}
                className="bg-gradient-to-r from-bright-pink to-bright-purple hover:from-bright-purple hover:to-bright-pink text-white rounded-full px-4 py-2 transform hover:scale-105 transition-all"
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                Agregar
              </Button>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}