interface FeaturedBook {
  id: string
  title: string
  author: string
  price: string
  label: string
  labelStyle: {
    bg: string
    text: string
    border: string
  }
  coverBg: string
  coverAccent: string
}

const FEATURED_BOOKS: FeaturedBook[] = [
  {
    id: 'midnight-library',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: '$18.00',
    label: 'BESTSELLER',
    labelStyle: {
      bg: 'bg-[#F4775B]/15',
      text: 'text-[#F4775B]',
      border: 'border-[#F4775B]/30',
    },
    coverBg: 'bg-[#1E293B] text-white',
    coverAccent: '#F5D66B',
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    price: '$21.00',
    label: 'POPULAR',
    labelStyle: {
      bg: 'bg-[#F5D66B]/30',
      text: 'text-[#8A5F00]',
      border: 'border-[#F5D66B]',
    },
    coverBg: 'bg-[#FEFCE8] text-[#25272B]',
    coverAccent: '#F4775B',
  },
  {
    id: 'psychology-of-money',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: '$19.00',
    label: "EDITOR'S PICK",
    labelStyle: {
      bg: 'bg-[#3457E5]/15',
      text: 'text-[#3457E5]',
      border: 'border-[#3457E5]/30',
    },
    coverBg: 'bg-[#0F172A] text-white',
    coverAccent: '#B9DDCC',
  },
  {
    id: 'clean-code',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    price: '$35.00',
    label: 'FOR DEVELOPERS',
    labelStyle: {
      bg: 'bg-[#B9DDCC]/35',
      text: 'text-[#1E4D38]',
      border: 'border-[#B9DDCC]',
    },
    coverBg: 'bg-[#2A3F6D] text-white',
    coverAccent: '#F5D66B',
  },
]

export function FeaturedBooks() {
  return (
    <section
      id="featured"
      aria-labelledby="featured-heading"
      className="relative bg-[#FFF8EF] py-14 sm:py-18 md:py-22 border-t border-[#E8DFC9]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl space-y-3">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E6] border border-[#F4775B]/20">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#F4775B]"
                aria-hidden="true"
              />
              <p className="text-xs font-bold tracking-widest text-[#F4775B] uppercase">
                CURATED FOR YOU • TUYỂN CHỌN DÀNH CHO BẠN
              </p>
            </div>

            {/* Heading */}
            <h2
              id="featured-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#25272B] tracking-tight leading-tight"
            >
              Books worth staying up for.
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#25272B]/75 leading-relaxed">
              Thoughtful reads, timeless stories and fresh perspectives picked for your next chapter.
            </p>
          </div>

          {/* View All Books Link */}
          <div className="shrink-0">
            <a
              href="#books"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#3457E5] hover:text-[#2542BA] hover:underline transition-colors group"
            >
              <span>View all books • Xem tất cả</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        {/* 4-COLUMN BOOK GRID (2-column on tablet & mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FEATURED_BOOKS.map((book) => {
            const detailHref = `#/books/${book.id}`
            return (
              <article
                key={book.id}
                className="group bg-[#FFFDF9] rounded-2xl border border-[#E8DFC9] p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[#3457E5]/35 hover:shadow-xs"
              >
                <div>
                  {/* Book Cover Container with standard 2:3 ratio (Clickable) */}
                  <a
                    href={detailHref}
                    className="block relative w-full aspect-[2/3] mb-4 rounded-xl overflow-hidden bg-[#FAF7F0] border border-[#E8DFC9]/70 flex flex-col justify-between p-3.5 sm:p-4 border-l-4 border-l-[#25272B]/20 transition-transform group-hover:scale-[1.01]"
                    aria-label={`View details for ${book.title}`}
                  >
                    {/* Top Label Badge */}
                    <div className="flex items-start justify-between gap-1.5">
                      <span
                        className={`inline-block text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-md border ${book.labelStyle.bg} ${book.labelStyle.text} ${book.labelStyle.border}`}
                      >
                        {book.label}
                      </span>
                    </div>

                    {/* Visual Book Cover Area */}
                    <div className="my-auto space-y-1.5 py-2">
                      <div
                        className={`w-full h-20 sm:h-24 rounded-lg ${book.coverBg} p-2.5 flex flex-col justify-end border border-white/20`}
                      >
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider block"
                          style={{ color: book.coverAccent }}
                        >
                          BOOKLY EDITION
                        </span>
                        <div className="w-5 h-0.5 bg-white/40 my-1" />
                        <span className="text-[8px] opacity-75 italic">
                          Aspect Ratio 2:3
                        </span>
                      </div>

                      <h3 className="text-xs sm:text-sm font-bold text-[#25272B] leading-tight line-clamp-2 pt-1 group-hover:text-[#3457E5] transition-colors">
                        {book.title}
                      </h3>
                    </div>

                    {/* Explicit Placeholder Notice */}
                    <div className="pt-1.5 border-t border-[#E8DFC9]/70 flex items-center justify-between text-[8px] sm:text-[9px] text-[#25272B]/50 font-mono">
                      <span>COVER PLACEHOLDER</span>
                      <span>200×300</span>
                    </div>
                  </a>

                  {/* Book Information */}
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-extrabold text-[#25272B] tracking-tight leading-snug line-clamp-1">
                      <a
                        href={detailHref}
                        className="hover:text-[#3457E5] hover:underline transition-colors"
                      >
                        {book.title}
                      </a>
                    </h3>
                    <p className="text-xs text-[#25272B]/70 font-medium">
                      {book.author}
                    </p>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-4 mt-3 border-t border-[#E8DFC9]/60 flex items-center justify-between gap-2">
                  <span className="text-base sm:text-lg font-black text-[#25272B]">
                    {book.price}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={detailHref}
                      className="px-2 py-1.5 rounded-xl border border-[#E8DFC9] hover:border-[#3457E5] bg-white text-[#25272B] text-xs font-semibold hover:text-[#3457E5] transition-colors"
                    >
                      Chi tiết
                    </a>

                    <button
                      type="button"
                      disabled
                      title="Tính năng giỏ hàng đang phát triển / Cart feature coming soon"
                      aria-label={`Thêm ${book.title} vào giỏ (UI mẫu)`}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#3457E5] text-white text-xs font-semibold cursor-default opacity-90"
                    >
                      <svg
                        className="w-3.5 h-3.5 shrink-0"
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
                      <span className="hidden sm:inline">Thêm</span>
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
