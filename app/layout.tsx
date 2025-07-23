import './globals.css';
import type { Metadata } from 'next';
import { Fredoka } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const fredoka = Fredoka({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Mimi Pony - Juguetería Online',
  description: 'Los mejores juguetes para niños. Coloridos, divertidos y educativos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
