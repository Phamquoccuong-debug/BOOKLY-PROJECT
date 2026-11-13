import { useContext } from 'react'
import { CartContext } from './cartTypes'
import type { CartContextValue } from './cartTypes'

export function useCart(): CartContextValue {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
