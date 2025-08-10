import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CategoryGrid } from "@/components/category-grid";
import { fetchCategories } from "@/lib/getCategories";

export default async function CategoriesPage() {
  const categories = await fetchCategories();

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <CategoryGrid categories={categories} />
      </main>

      <Footer />
    </div>
  );
}
