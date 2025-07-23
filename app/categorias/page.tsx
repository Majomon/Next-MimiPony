import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CategoryGrid } from '@/components/category-grid';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-bright-pink to-bright-purple bg-clip-text text-transparent mb-4">
            🎨 Nuestras Categorías
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explora todas nuestras categorías de juguetes organizadas especialmente para ti
          </p>
        </div>
        
        <CategoryGrid />
      </main>
      
      <Footer />
    </div>
  );
}