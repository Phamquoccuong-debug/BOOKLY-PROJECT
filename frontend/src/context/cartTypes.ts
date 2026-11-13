import { createContext } from 'react'

// ─── Types (inlined to avoid circular imports) ────────────────────────────────

export interface CartItem {
  bookId: string
  quantity: number
}

export interface CartContextValue {
  items: CartItem[]
  addToCart: (bookId: string) => void
  removeFromCart: (bookId: string) => void
  updateQuantity: (bookId: string, quantity: number) => void
  clearCart: () => void
  totalQuantity: number
  subtotal: number
}

// ─── Context ──────────────────────────────────────────────────────────────────

export const CartContext = createContext<CartContextValue | null>(null)
