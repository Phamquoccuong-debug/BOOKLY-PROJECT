import { useState, useEffect, useCallback, type ReactNode } from 'react'
import { SAMPLE_BOOKS } from '../pages/Books/data/booksData'
import { CartContext } from './cartTypes'
import type { CartItem } from './cartTypes'

// ─── Constants ───────────────────────────────────────────────────────────────

const STORAGE_KEY = 'bookly_cart'
const VALID_IDS = new Set(SAMPLE_BOOKS.map((b) => b.id))

// ─── Helpers ─────────────────────────────────────────────────────────────────

function loadFromStorage(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (item): item is CartItem =>
        typeof item === 'object' &&
        item !== null &&
        typeof (item as CartItem).bookId === 'string' &&
        typeof (item as CartItem).quantity === 'number' &&
        VALID_IDS.has((item as CartItem).bookId) &&
        (item as CartItem).quantity > 0,
    )
  } catch {
    return []
  }
}

function saveToStorage(items: CartItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

// ─── Provider ────────────────────────────────────────────────────────────────

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadFromStorage)

  useEffect(() => {
    saveToStorage(items)
  }, [items])

  const addToCart = useCallback((bookId: string) => {
    if (!VALID_IDS.has(bookId)) return
    setItems((prev) => {
      const existing = prev.find((i) => i.bookId === bookId)
      if (existing) {
        return prev.map((i) =>
          i.bookId === bookId ? { ...i, quantity: i.quantity + 1 } : i,
        )
      }
      return [...prev, { bookId, quantity: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((bookId: string) => {
    setItems((prev) => prev.filter((i) => i.bookId !== bookId))
  }, [])

  const updateQuantity = useCallback((bookId: string, quantity: number) => {
    if (quantity < 1) return
    setItems((prev) =>
      prev.map((i) => (i.bookId === bookId ? { ...i, quantity } : i)),
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const totalQuantity = items.reduce((sum, i) => sum + i.quantity, 0)

  const subtotal = items.reduce((sum, i) => {
    const book = SAMPLE_BOOKS.find((b) => b.id === i.bookId)
    return sum + (book ? book.price * i.quantity : 0)
  }, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalQuantity,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
