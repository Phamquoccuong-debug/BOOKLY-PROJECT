import { useCart } from '../../../context/useCart'
import { SAMPLE_BOOKS } from '../../Books/data/booksData'
import type { CartItem as CartItemType } from '../../../context/cartTypes'

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { removeFromCart, updateQuantity } = useCart()
  const book = SAMPLE_BOOKS.find((b) => b.id === item.bookId)

  if (!book) return null

  const itemTotal = (book.price * item.quantity).toFixed(2)

  return (
    <div className="flex gap-4 sm:gap-6 py-6 border-b border-[#E8DFC9] last:border-b-0">
      {/* Cover Placeholder */}
      <div
        className={`shrink-0 w-16 sm:w-20 aspect-[2/3] rounded-xl ${book.coverBg} flex items-end p-2 border border-white/10 shadow-xs`}
      >
        <span
          className="text-[8px] font-black uppercase tracking-wider leading-tight opacity-80 line-clamp-2"
          style={{ color: book.coverAccent }}
        >
          {book.title}
        </span>
      </div>

      {/* Book Info */}
      <div className="flex-1 min-w-0 space-y-1">
        <a
          href={`#/books/${book.id}`}
          className="font-bold text-[#25272B] hover:text-[#3457E5] transition-colors line-clamp-2 leading-snug text-sm sm:text-base"
        >
          {book.title}
        </a>
        <p className="text-xs sm:text-sm text-[#25272B]/65 font-medium">
          {book.author}
        </p>
        <p className="text-xs text-[#25272B]/50 font-medium">
          {book.category}
        </p>

        {/* Mobile: price + qty row */}
        <div className="flex items-center justify-between gap-3 pt-2">
          {/* Quantity controls */}
          <div className="flex items-center gap-1 border border-[#E8DFC9] rounded-lg bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => updateQuantity(book.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              aria-label="Giảm số lượng"
              className="w-8 h-8 flex items-center justify-center text-[#25272B] hover:bg-[#FFF8EF] disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-lg font-bold"
            >
              −
            </button>
            <span className="w-8 text-center text-sm font-bold text-[#25272B]">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(book.id, item.quantity + 1)}
              aria-label="Tăng số lượng"
              className="w-8 h-8 flex items-center justify-center text-[#25272B] hover:bg-[#FFF8EF] transition-colors text-lg font-bold"
            >
              +
            </button>
          </div>

          {/* Item subtotal */}
          <div className="text-right">
            <span className="text-sm sm:text-base font-black text-[#25272B]">
              ${itemTotal}
            </span>
            {item.quantity > 1 && (
              <p className="text-[11px] text-[#25272B]/50">
                ${book.price.toFixed(2)} × {item.quantity}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Remove button */}
      <button
        type="button"
        onClick={() => removeFromCart(book.id)}
        aria-label={`Xóa ${book.title} khỏi giỏ hàng`}
        className="shrink-0 self-start p-1.5 rounded-lg text-[#25272B]/40 hover:text-[#F4775B] hover:bg-[#F4775B]/10 transition-colors"
        title="Xóa khỏi giỏ"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  )
}
