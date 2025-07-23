import { Button } from '@/components/ui/button';
import { Sparkles, Gift, Star } from 'lucide-react';

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pastel-pink via-pastel-purple to-pastel-blue rounded-3xl mx-4 my-8">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 animate-bounce">
        <Star className="h-8 w-8 text-pastel-yellow fill-current" />
      </div>
      <div className="absolute top-20 right-20 animate-pulse">
        <Sparkles className="h-6 w-6 text-white" />
      </div>
      <div className="absolute bottom-10 left-20 animate-bounce delay-300">
        <Gift className="h-10 w-10 text-pastel-yellow" />
      </div>
      
      <div className="relative container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main unicorn emoji */}
          <div className="text-8xl animate-bounce">
            🦄
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            ¡Bienvenidos a la
            <span className="block bg-gradient-to-r from-pastel-yellow to-white bg-clip-text text-transparent">
              Magia de Mimi Pony!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Pedí nuestro catálogo. Muchas cosas divertidas te están esperando. 
            ¡Los mejores juguetes para hacer volar la imaginación! ✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-white text-bright-pink hover:bg-white/90 font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all shadow-lg">
              <Gift className="h-5 w-5 mr-2" />
              Ver Catálogo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-bright-pink font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all">
              <Sparkles className="h-5 w-5 mr-2" />
              Ofertas Especiales
            </Button>
          </div>
          
          {/* Fun stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-white/80 text-sm">Juguetes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-white/80 text-sm">Diversión</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">⭐⭐⭐⭐⭐</div>
              <div className="text-white/80 text-sm">Calidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}