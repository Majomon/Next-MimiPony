import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { CategoryGrid } from "@/components/category-grid";
import { ProductCard } from "@/components/product-card";
import { getRecentProducts } from "@/lib/products";
import { fetchCategories } from "@/lib/getCategories";

export default async function Home() {
  const recentProducts = getRecentProducts(6);
  const categories = await fetchCategories();

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <HeroBanner />

        <CategoryGrid categories={categories} />

        {/* Recent Products Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-bright-pink to-bright-purple bg-clip-text text-transparent mb-4">
              ✨ Últimos Juguetes Agregados
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Descubre las novedades más emocionantes que acabamos de agregar a
              nuestra colección
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
