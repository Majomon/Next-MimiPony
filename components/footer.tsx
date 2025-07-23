import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-xl">🦄</span>
              </div>
              <h3 className="text-xl font-bold text-white">Mimi Pony</h3>
            </div>
            <p className="text-white/80 text-sm">
              Los mejores juguetes para hacer felices a los niños. Calidad, diversión y aprendizaje en cada producto.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Facebook className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Instagram className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Twitter className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="/productos" className="text-white/80 hover:text-white transition-colors">Productos</Link></li>
              <li><Link href="/categorias" className="text-white/80 hover:text-white transition-colors">Categorías</Link></li>
              <li><Link href="/ofertas" className="text-white/80 hover:text-white transition-colors">Ofertas</Link></li>
            </ul>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><Link href="/categoria/educativos" className="text-white/80 hover:text-white transition-colors">Educativos</Link></li>
              <li><Link href="/categoria/muñecas" className="text-white/80 hover:text-white transition-colors">Muñecas</Link></li>
              <li><Link href="/categoria/vehículos" className="text-white/80 hover:text-white transition-colors">Vehículos</Link></li>
              <li><Link href="/categoria/peluches" className="text-white/80 hover:text-white transition-colors">Peluches</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white/80" />
                <span className="text-white/80 text-sm">+54 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white/80" />
                <span className="text-white/80 text-sm">info@mimipony.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-white/80" />
                <span className="text-white/80 text-sm">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80 text-sm">
            © 2024 Mimi Pony. Todos los derechos reservados. Hecho con 💖 para hacer felices a los niños.
          </p>
        </div>
      </div>
    </footer>
  );
}