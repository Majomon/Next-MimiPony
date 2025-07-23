'use client';

import Link from 'next/link';
import { ShoppingCart, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/lib/cart-store';

export function Header() {
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b-4 border-pastel-pink shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-2xl">🦄</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-bright-pink to-bright-purple bg-clip-text text-transparent">
                Mimi Pony
              </h1>
              <p className="text-xs text-gray-600">Juguetería Mágica</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-bright-pink font-medium transition-colors">
              Inicio
            </Link>
            <Link href="/productos" className="text-gray-700 hover:text-bright-pink font-medium transition-colors">
              Productos
            </Link>
            <Link href="/categorias" className="text-gray-700 hover:text-bright-pink font-medium transition-colors">
              Categorías
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-bright-pink font-medium transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative hover:bg-pastel-pink/20">
              <Heart className="h-5 w-5 text-gray-600" />
            </Button>
            
            <Link href="/checkout">
              <Button variant="ghost" size="icon" className="relative hover:bg-pastel-pink/20">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-bright-pink text-white text-xs">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
            
            <Link href="/login">
              <Button className="bg-gradient-to-r from-bright-pink to-bright-purple hover:from-bright-purple hover:to-bright-pink text-white font-medium px-4 py-2 rounded-full transition-all transform hover:scale-105">
                <User className="h-4 w-4 mr-2" />
                Ingresar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}