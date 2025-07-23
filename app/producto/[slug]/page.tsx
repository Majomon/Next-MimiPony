import { AddToCartButton } from "@/components/add-to-cart-button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug, getProductsByCategory } from "@/lib/products";
import { Heart, Shield, Star, Truck } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-pastel-pink/30">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                className="w-full h-96 object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-bright-pink text-white">
                {product.ageRange}
              </Badge>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge
                variant="secondary"
                className="mb-2 bg-pastel-purple/20 text-purple-700"
              >
                {product.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">(127 reseñas)</span>
              </div>
            </div>

            <div className="text-4xl font-bold text-bright-pink mb-6">
              ${product.price.toLocaleString()}
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4">
              <AddToCartButton product={product} />

              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-bright-pink transition-colors">
                  <Heart className="h-5 w-5" />
                  <span>Agregar a favoritos</span>
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <Card className="bg-pastel-blue/20 border-pastel-blue/30">
                <CardContent className="p-4 text-center">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Garantía</p>
                  <p className="text-xs text-gray-600">6 meses</p>
                </CardContent>
              </Card>
              <Card className="bg-pastel-green/20 border-green-300">
                <CardContent className="p-4 text-center">
                  <Truck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Envío Gratis</p>
                  <p className="text-xs text-gray-600">En CABA</p>
                </CardContent>
              </Card>
              <Card className="bg-pastel-yellow/20 border-yellow-300">
                <CardContent className="p-4 text-center">
                  <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Calidad</p>
                  <p className="text-xs text-gray-600">Premium</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-bright-pink to-bright-purple bg-clip-text text-transparent mb-8">
              Productos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
