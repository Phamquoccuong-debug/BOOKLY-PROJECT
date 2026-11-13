import { useCart } from '../../context/useCart'
import { CartItem } from './components/CartItem'
import { OrderSummary } from './components/OrderSummary'

export function CartPage() {
  const { items, clearCart, totalQuantity, subtotal } = useCart()

  const isEmpty = items.length === 0

  return (
    <main className="flex-1 w-full bg-[#FFF8EF] py-10 sm:py-14 md:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-8 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#3457E5] mb-2">
            GIỎ HÀNG CỦA BẠN • YOUR CART
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#25272B] tracking-tight leading-tight">
            Giỏ hàng của bạn.
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#25272B]/65 font-medium">
            Cuốn sách tuyệt vời tiếp theo của bạn chỉ còn vài bước nữa thôi. •{' '}
            <span className="italic">
              Your next great read is just a few steps away.
            </span>
          </p>
        </div>

        {isEmpty ? (
          /* ── EMPTY STATE ─────────────────────────────────────────────── */
          <div className="flex flex-col items-center justify-center py-20 sm:py-32 text-center space-y-6">
            {/* Illustration */}
            <div className="w-24 h-24 rounded-3xl bg-white border border-[#E8DFC9] flex items-center justify-center shadow-xs">
              <svg
                className="w-12 h-12 text-[#25272B]/30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-black text-[#25272B]">
                Giỏ hàng đang trống.
              </h2>
              <p className="text-sm text-[#25272B]/60 max-w-sm leading-relaxed">
                Hãy khám phá danh mục sách và thêm những tựa sách bạn yêu thích
                vào giỏ. •{' '}
                <span className="italic">
                  Browse our collection and add books you love.
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#/books"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3457E5] hover:bg-[#2844BC] text-white text-sm font-bold shadow-xs transition-colors"
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
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                  <path d="M6 2v20" />
                </svg>
                <span>Khám phá sách • Browse Books</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#E8DFC9] bg-white text-[#25272B] text-sm font-semibold hover:border-[#3457E5] transition-colors"
              >
                <span>Trang chủ • Home</span>
              </a>
            </div>
          </div>
        ) : (
          /* ── CART WITH ITEMS ─────────────────────────────────────────── */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left column: Cart item list */}
            <div className="lg:col-span-7 xl:col-span-8">
              {/* Cart header row */}
              <div className="flex items-center justify-between mb-2 pb-4 border-b border-[#E8DFC9]">
                <span className="text-sm font-bold text-[#25272B]">
                  {totalQuantity} sản phẩm • {totalQuantity}{' '}
                  {totalQuantity === 1 ? 'item' : 'items'}
                </span>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs font-semibold text-[#25272B]/50 hover:text-[#F4775B] transition-colors"
                >
                  Xóa tất cả • Clear cart
                </button>
              </div>

              {/* Items */}
              <div>
                {items.map((item) => (
                  <CartItem key={item.bookId} item={item} />
                ))}
              </div>

              {/* Continue shopping */}
              <div className="mt-6">
                <a
                  href="#/books"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#3457E5] hover:underline underline-offset-2 transition-colors"
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
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                  <span>Tiếp tục mua sắm • Continue Shopping</span>
                </a>
              </div>
            </div>

            {/* Right column: Order summary */}
            <div className="lg:col-span-5 xl:col-span-4">
              <OrderSummary subtotal={subtotal} />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
