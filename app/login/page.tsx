'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, Lock, User, Heart } from 'lucide-react';
import { toast } from 'sonner';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      toast.success('¡Bienvenido de vuelta! 🎉', {
        description: 'Has iniciado sesión correctamente.',
      });
    } else {
      toast.success('¡Cuenta creada exitosamente! 🎉', {
        description: 'Ya puedes empezar a comprar juguetes mágicos.',
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🦄</div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-bright-pink to-bright-purple bg-clip-text text-transparent mb-2">
              {isLogin ? '¡Hola de nuevo!' : '¡Únete a la magia!'}
            </h1>
            <p className="text-gray-600">
              {isLogin 
                ? 'Inicia sesión para continuar tu aventura' 
                : 'Crea tu cuenta y descubre un mundo de diversión'
              }
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-2 border-pastel-pink/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-bright-pink flex items-center justify-center">
                <Heart className="h-5 w-5 mr-2" />
                {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Nombre completo
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-10 border-pastel-pink/50 focus:border-bright-pink"
                        required
                      />
                    </div>
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Correo electrónico
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 border-pastel-pink/50 focus:border-bright-pink"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-medium">
                    Contraseña
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 border-pastel-pink/50 focus:border-bright-pink"
                      required
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-bright-pink to-bright-purple hover:from-bright-purple hover:to-bright-pink text-white font-bold py-3 rounded-full text-lg transform hover:scale-105 transition-all shadow-lg"
                >
                  {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'} ✨
                </Button>
              </form>
              
              <div className="mt-6">
                <Separator className="my-4" />
                <div className="text-center">
                  <p className="text-gray-600 text-sm">
                    {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-bright-pink hover:text-bright-purple font-medium"
                  >
                    {isLogin ? 'Crear cuenta nueva' : 'Iniciar sesión'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Al continuar, aceptas nuestros términos y condiciones de uso.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}