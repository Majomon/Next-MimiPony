import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  slug: string;
  ageRange: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      
      addItem: (product: Product) => {
        const { items } = get();
        const existingItem = items.find(item => item.id === product.id);
        
        if (existingItem) {
          const updatedItems = items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          const newTotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
          set({ items: updatedItems, total: newTotal });
        } else {
          const newItems = [...items, { ...product, quantity: 1 }];
          const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
          set({ items: newItems, total: newTotal });
        }
      },
      
      removeItem: (id: string) => {
        const { items } = get();
        const newItems = items.filter(item => item.id !== id);
        const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        set({ items: newItems, total: newTotal });
      },
      
      updateQuantity: (id: string, quantity: number) => {
        const { items } = get();
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        
        const updatedItems = items.map(item =>
          item.id === id ? { ...item, quantity } : item
        );
        const newTotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        set({ items: updatedItems, total: newTotal });
      },
      
      clearCart: () => {
        set({ items: [], total: 0 });
      },
      
      getItemCount: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.quantity, 0);
      }
    }),
    {
      name: 'mimi-pony-cart',
    }
  )
);