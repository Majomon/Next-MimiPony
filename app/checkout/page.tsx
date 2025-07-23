'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useCartStore } from '@/lib/cart-store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';

export default function CheckoutPage() {
  const { items, total, updateQuantity: updateCartQuantity, removeItem, clearCart } = useCartStore();

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      toast.success('Producto eliminado del carrito');
    } else {
      updateCartQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id);
    toast.success(`${name} eliminado del carrito`);
  };

  const handleCheckout = () => {
    toast.success('¡Compra confirmada! 🎉', {
      description: 'Te contactaremos pronto para coordinar la entrega.',
    });
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <div className="text-6xl">🛒</div>
            <h1 className="text-3xl font-bold text-gray-800">Tu carrito está vacío</h1>
            <p className="text-gray-600 text-lg">¡Agrega algunos juguetes mágicos para empezar!</p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-bright-pink to-bright-purple hover:from-bright-purple hover:to-bright-pink text-white font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Explorar Productos
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-bright-pink to-bright-purple bg-clip-text text-transparent mb-2">
            🛒 Tu Carrito Mágico
          </h1>
          <p className="text-gray-600">Revisa tus productos antes de confirmar la compra</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="bg-white/80 backdrop-blur-sm border-2 border-pastel-pink/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                      <p className="text-lg font-bold text-bright-pink">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 rounded-full border-pastel-pink hover:bg-pastel-pink/20"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 rounded-full border-pastel-pink hover:bg-pastel-pink/20"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveItem(item.id, item.name)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-pastel-pink/30 sticky top-24">
              <CardHeader>
                <CardTitle className="text-bright-pink flex items-center">
                  💝 Resumen del Pedido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} x{item.quantity}</span>
                      <span>${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Envío</span>
                    <span className="text-green-600">Gratis</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-bright-pink">${total.toLocaleString()}</span>
                </div>
                
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-bright-pink to-bright-purple hover:from-bright-purple hover:to-bright-pink text-white font-bold py-4 rounded-full text-lg transform hover:scale-105 transition-all shadow-lg"
                >
                  Confirmar Compra 🎉
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Al confirmar, nos contactaremos contigo para coordinar el pago y la entrega.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}