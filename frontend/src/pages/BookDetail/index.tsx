import { useMemo, useState } from 'react'
import { SAMPLE_BOOKS } from '../Books/data/booksData'
import { useCart } from '../../context/useCart'

interface BookDetailProps {
  bookId: string
}

export function BookDetailPage({ bookId }: BookDetailProps) {
  // Find selected book by stable unique id
  const book = useMemo(() => {
    return SAMPLE_BOOKS.find((b) => b.id === bookId)
  }, [bookId])

  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  function handleAddToCart() {
    if (!book) return
    addToCart(book.id)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  // NOT FOUND STATE (Invalid or missing book ID)
  if (!book) {
    return (
      <main className="flex-1 w-full bg-[#FFF8EF] py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-[#FFF0E6] text-[#F4775B] flex items-center justify-center border border-[#F4775B]/25">
            <svg
              className="w-10 h-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#F4775B]">
              404 • BOOK NOT FOUND
            </p>
            <h1 className="text-3xl sm:text-4xl font-black text-[#25272B] tracking-tight">
              Book not found. • Không tìm thấy cuốn sách này.
            </h1>
            <p className="text-sm sm:text-base text-[#25272B]/70 max-w-md mx-auto leading-relaxed">
              The book ID <span className="font-mono text-xs px-2 py-0.5 rounded-md bg-white border border-[#E8DFC9] font-bold text-[#3457E5]">"{bookId}"</span> does not exist in our demonstration catalog or may have been moved.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
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
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span>Back to Books • Quay lại danh mục</span>
            </a>

            <a
              href="#/discover"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#E8DFC9] bg-white text-[#25272B] text-sm font-semibold hover:border-[#3457E5] transition-colors"
            >
              <span>Homepage • Trang chủ</span>
            </a>
          </div>
        </div>
      </main>
    )
  }

  // VALID BOOK DETAIL VIEW
  return (
    <main className="flex-1 w-full bg-[#FFF8EF] py-10 sm:py-14 md:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* BREADCRUMB */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-[#25272B]/60 font-medium flex-wrap"
        >
          <a
            href="#/discover"
            className="hover:text-[#3457E5] hover:underline transition-colors"
          >
            Home
          </a>
          <span aria-hidden="true">/</span>
          <a
            href="#/books"
            className="hover:text-[#3457E5] hover:underline transition-colors"
          >
            Books
          </a>
          <span aria-hidden="true">/</span>
          <a
            href="#/books"
            className="hover:text-[#3457E5] hover:underline transition-colors"
          >
            {book.category}
          </a>
          <span aria-hidden="true">/</span>
          <span className="text-[#25272B] font-bold truncate max-w-xs sm:max-w-sm">
            {book.title}
          </span>
        </nav>

        {/* MAIN PRODUCT AREA (Two-column on desktop, stacked on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN: Large Book Cover Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[2/3] rounded-3xl bg-[#FAF7F0] border border-[#E8DFC9] p-6 sm:p-8 flex flex-col justify-between shadow-md border-l-8 border-l-[#25272B]/20">
              {/* Top Badge */}
              <div className="flex items-center justify-between">
                {book.label && book.labelColor ? (
                  <span
                    className={`inline-block text-xs font-black tracking-wider uppercase px-3 py-1 rounded-md border ${book.labelColor.bg} ${book.labelColor.text} ${book.labelColor.border}`}
                  >
                    {book.label}
                  </span>
                ) : (
                  <span />
                )}
                <span className="text-xs font-bold text-[#25272B]/60">
                  {book.categoryVi}
                </span>
              </div>

              {/* Large Cover Graphic Area */}
              <div className="my-auto space-y-3 py-6">
                <div
                  className={`w-full h-44 sm:h-52 rounded-2xl ${book.coverBg} p-5 flex flex-col justify-end border border-white/20 shadow-xs`}
                >
                  <span
                    className="text-xs font-black uppercase tracking-widest block"
                    style={{ color: book.coverAccent }}
                  >
                    BOOKLY PRESS EDITION
                  </span>
                  <div className="w-8 h-0.5 bg-white/40 my-2" />
                  <span className="text-[10px] opacity-75 italic">
                    Original Release • Standard 2:3 Ratio
                  </span>
                </div>

                <div className="text-center pt-2">
                  <h2 className="text-lg sm:text-xl font-black text-[#25272B] leading-tight">
                    {book.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#25272B]/70 font-medium mt-1">
                    by {book.author}
                  </p>
                </div>
              </div>

              {/* Bottom Placeholder Notice */}
              <div className="pt-3 border-t border-[#E8DFC9] flex items-center justify-between text-[10px] font-mono text-[#25272B]/50">
                <span>COVER PLACEHOLDER</span>
                <span>400 × 600 px (2:3)</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Book Information & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Category and Label */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3457E5]/10 text-[#3457E5] border border-[#3457E5]/20 text-xs font-bold uppercase tracking-wider">
                {book.category}
              </span>

              {book.label && book.labelColor && (
                <span
                  className={`inline-block text-xs font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md border ${book.labelColor.bg} ${book.labelColor.text} ${book.labelColor.border}`}
                >
                  {book.label}
                </span>
              )}
            </div>

            {/* Title and Author */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#25272B] tracking-tight leading-tight">
                {book.title}
              </h1>
              <p className="text-base sm:text-lg text-[#25272B]/75 font-medium">
                Written by <span className="font-bold text-[#25272B]">{book.author}</span>
              </p>
            </div>

            {/* Price */}
            <div className="pt-2 pb-4 border-y border-[#E8DFC9]">
              <span className="text-3xl sm:text-4xl font-black text-[#25272B]">
                {book.priceFormatted}
              </span>
              <span className="ml-3 text-xs sm:text-sm text-[#25272B]/60 font-medium">
                (Standard hardcover edition • Giá bản in chuẩn)
              </span>
            </div>

            {/* Description (English and Vietnamese) */}
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#25272B]">
                Book Overview • Giới thiệu tác phẩm
              </h2>
              <p className="text-sm sm:text-base text-[#25272B]/85 leading-relaxed">
                {book.description}
              </p>
              <p className="text-xs sm:text-sm text-[#25272B]/75 leading-relaxed italic bg-white/60 p-4 rounded-xl border border-[#E8DFC9]">
                "{book.descriptionVi}"
              </p>
              <p className="text-[11px] text-[#25272B]/50 italic">
                * Đoạn trích giới thiệu mẫu cho mục đích trình diễn giao diện (Demonstration data).
              </p>
            </div>

            {/* Purchase / Add to Cart Action (Non-functional UI placeholder) */}
            <div className="pt-4 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  aria-label={`Thêm ${book.title} vào giỏ hàng`}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#3457E5] hover:bg-[#2844BC] text-white text-base font-bold shadow-xs cursor-pointer transition-colors"
                >
                  {added ? (
                    <>
                      <svg
                        className="w-5 h-5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Đã thêm vào giỏ! • Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2Z" />
                        <path d="M3 6h18" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                      <span>Thêm vào giỏ hàng • Add to Cart</span>
                    </>
                  )}
                </button>

                <a
                  href="#/books"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-[#E8DFC9] bg-white hover:bg-slate-50 text-[#25272B] text-base font-semibold transition-colors"
                >
                  <span>Xem thêm sách khác</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#25272B]/60 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Giao hàng toàn quốc • Miễn phí đổi trả trong 7 ngày</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

