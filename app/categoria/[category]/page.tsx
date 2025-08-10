import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { Product } from "@/lib/cart-store";
import { fetchProducts } from "@/lib/getProducts";

const categoryEmojis: { [key: string]: string } = {
  educativos: "🧩",
  muñecas: "👸",
  vehículos: "🚗",
  peluches: "🧸",
  "juego de roles": "🎭",
  deportes: "⚽",
  "arte y manualidades": "🎨",
};

interface CategoryPageProps {
  params: { category: string };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  const categoryParam = decodeURIComponent(category)
    .replace(/-/g, " ")
    .toLowerCase();

  const allProducts: Product[] = await fetchProducts();

  const filteredProducts = allProducts.filter(
    (product) => product.category.toLowerCase() === categoryParam
  );

  // Si no hay productos en esa categoría, decidís si mostrar notFound() o la página vacía
  // Acá muestro la página pero con mensaje "Próximamente"
  // Si querés que lance 404: if(filteredProducts.length === 0) notFound();

  const emoji = categoryEmojis[categoryParam] || "🎯";

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{emoji}</div>
          <h1 className="capitalize text-3xl md:text-4xl font-bold bg-gradient-to-r from-bright-pink to-bright-purple bg-clip-text text-transparent mb-4">
            {categoryParam}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto capitalize">
            Descubre nuestra increíble selección de {categoryParam}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredProducts.length} producto
                {filteredProducts.length !== 1 ? "s" : ""} encontrado
                {filteredProducts.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Próximamente
            </h3>
            <p className="text-gray-600">
              Estamos agregando productos increíbles a esta categoría
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
