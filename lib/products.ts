import { Product } from './cart-store';

export const products: Product[] = [
  {
    id: '1',
    name: 'Unicornio Mágico Arcoíris',
    price: 2500,
    image: 'https://images.pexels.com/photos/6045244/pexels-photo-6045244.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Peluches',
    description: 'Hermoso unicornio de peluche con colores arcoíris. Suave y abrazable, perfecto para acompañar a los niños en sus aventuras mágicas.',
    slug: 'unicornio-magico-arcoiris',
    ageRange: '3-8 años',
    inStock: true
  },
  {
    id: '2',
    name: 'Bloques de Construcción Coloridos',
    price: 1800,
    image: 'https://images.pexels.com/photos/298825/pexels-photo-298825.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Educativos',
    description: 'Set de 50 bloques de construcción en colores vibrantes. Desarrolla la creatividad y habilidades motoras.',
    slug: 'bloques-construccion-coloridos',
    ageRange: '2-6 años',
    inStock: true
  },
  {
    id: '3',
    name: 'Muñeca Princesa Rosa',
    price: 3200,
    image: 'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Muñecas',
    description: 'Elegante muñeca princesa con vestido rosa brillante y accesorios. Incluye corona y zapatos.',
    slug: 'muneca-princesa-rosa',
    ageRange: '4-10 años',
    inStock: true
  },
  {
    id: '4',
    name: 'Auto de Carreras Súper Veloz',
    price: 2100,
    image: 'https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=500',
    category: 'Vehículos',
    description: 'Auto de carreras con luces y sonidos. Perfecto para crear emocionantes aventuras de velocidad.',
    slug: 'auto-carreras-super-veloz',
    ageRange: '3-8 años',
    inStock: true
  },
  {
    id: '5',
    name: 'Puzzle Animales de la Selva',
    price: 1500,
    image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Educativos',
    description: 'Puzzle de 100 piezas con hermosos animales de la selva. Desarrolla paciencia y concentración.',
    slug: 'puzzle-animales-selva',
    ageRange: '5-12 años',
    inStock: true
  },
  {
    id: '6',
    name: 'Cocina de Juguete Deluxe',
    price: 4500,
    image: 'https://images.pexels.com/photos/6045244/pexels-photo-6045244.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Juego de Roles',
    description: 'Cocina completa con accesorios, luces y sonidos realistas. Fomenta el juego imaginativo.',
    slug: 'cocina-juguete-deluxe',
    ageRange: '3-8 años',
    inStock: true
  },
  {
    id: '7',
    name: 'Pelota Saltarina Gigante',
    price: 800,
    image: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Deportes',
    description: 'Pelota grande y colorida perfecta para saltar y jugar al aire libre. Muy resistente.',
    slug: 'pelota-saltarina-gigante',
    ageRange: '4-12 años',
    inStock: true
  },
  {
    id: '8',
    name: 'Set de Arte Creativo',
    price: 2800,
    image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Arte y Manualidades',
    description: 'Kit completo con crayones, marcadores, papel y stickers. Todo lo necesario para crear arte.',
    slug: 'set-arte-creativo',
    ageRange: '3-10 años',
    inStock: true
  }
];

export const categories = [
  'Peluches',
  'Educativos', 
  'Muñecas',
  'Vehículos',
  'Juego de Roles',
  'Deportes',
  'Arte y Manualidades'
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getRecentProducts(limit: number = 6): Product[] {
  return products.slice(0, limit);
}