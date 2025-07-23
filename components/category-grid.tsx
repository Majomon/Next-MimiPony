import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const categoryData = [
  {
    name: 'Educativos',
    emoji: '🧩',
    color: 'from-pastel-blue to-bright-blue',
    description: 'Aprende jugando'
  },
  {
    name: 'Muñecas',
    emoji: '👸',
    color: 'from-pastel-pink to-bright-pink',
    description: 'Princesas y aventuras'
  },
  {
    name: 'Vehículos',
    emoji: '🚗',
    color: 'from-pastel-green to-green-500',
    description: 'Velocidad y diversión'
  },
  {
    name: 'Peluches',
    emoji: '🧸',
    color: 'from-pastel-yellow to-yellow-500',
    description: 'Suaves y abrazables'
  },
  {
    name: 'Juego de Roles',
    emoji: '🎭',
    color: 'from-pastel-purple to-bright-purple',
    description: 'Imagina y crea'
  },
  {
    name: 'Arte y Manualidades',
    emoji: '🎨',
    color: 'from-orange-300 to-orange-500',
    description: 'Creatividad sin límites'
  }
];

export function CategoryGrid() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-bright-pink to-bright-purple bg-clip-text text-transparent mb-4">
          Explora Nuestras Categorías
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Encuentra el juguete perfecto para cada momento de diversión y aprendizaje
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categoryData.map((category) => (
          <Link key={category.name} href={`/categoria/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-bright-pink/30">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                  {category.emoji}
                </div>
                <h3 className="font-bold text-gray-800 group-hover:text-bright-pink transition-colors mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}