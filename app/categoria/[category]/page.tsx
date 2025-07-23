import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { categories, getProductsByCategory } from "@/lib/products";
import { notFound } from "next/navigation";

const categoryEmojis: { [key: string]: string } = {
  educativos: "🧩",
  muñecas: "👸",
  vehículos: "🚗",
  peluches: "🧸",
  "juego de roles": "🎭",
  deportes: "⚽",
  "arte y manualidades": "🎨",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryName = decodeURIComponent(category).replace(/-/g, " ");
  const normalizedCategory = categories.find(
    (cat) => cat.toLowerCase() === categoryName.toLowerCase()
  );

  if (!normalizedCategory) {
    notFound();
  }

  const products = await getProductsByCategory(normalizedCategory);
  const emoji = categoryEmojis[normalizedCategory.toLowerCase()] || "🎯";

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{emoji}</div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-bright-pink to-bright-purple bg-clip-text text-transparent mb-4">
            {normalizedCategory}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre nuestra increíble selección de{" "}
            {normalizedCategory.toLowerCase()}
          </p>
        </div>

        {products.length > 0 ? (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                {products.length} producto{products.length !== 1 ? "s" : ""}{" "}
                encontrado{products.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
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
