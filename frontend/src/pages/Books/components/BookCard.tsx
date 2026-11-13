import type { Book } from '../../../types/book'

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  const detailHref = `#/books/${book.id}`

  return (
    <article className="group bg-[#FFFDF9] rounded-2xl border border-[#E8DFC9] p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[#3457E5]/35 hover:shadow-xs">
      <div>
        {/* Book Cover Container with standard 2:3 ratio (Clickable) */}
        <a
          href={detailHref}
          className="block relative w-full aspect-[2/3] mb-4 rounded-xl overflow-hidden bg-[#FAF7F0] border border-[#E8DFC9]/70 flex flex-col justify-between p-3.5 sm:p-4 border-l-4 border-l-[#25272B]/20 focus:outline-hidden focus:ring-2 focus:ring-[#3457E5]/40 transition-transform group-hover:scale-[1.01]"
          aria-label={`View details for ${book.title}`}
        >
          {/* Top Label Badge */}
          <div className="flex items-start justify-between gap-1.5">
            {book.label && book.labelColor ? (
              <span
                className={`inline-block text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-md border ${book.labelColor.bg} ${book.labelColor.text} ${book.labelColor.border}`}
              >
                {book.label}
              </span>
            ) : (
              <span />
            )}
            <span className="text-[10px] text-[#25272B]/60 font-medium">
              {book.categoryVi}
            </span>
          </div>

          {/* Visual Book Cover Area (Placeholder representation with 2:3 aspect ratio) */}
          <div className="my-auto space-y-1.5 py-2">
            <div
              className={`w-full h-20 sm:h-24 rounded-lg ${book.coverBg} p-2.5 flex flex-col justify-end border border-white/20`}
            >
              <span
                className="text-[10px] font-bold uppercase tracking-wider block"
                style={{ color: book.coverAccent }}
              >
                BOOKLY PRESS
              </span>
              <div className="w-5 h-0.5 bg-white/40 my-1" />
              <span className="text-[8px] opacity-75 italic">
                Tỷ lệ chuẩn 2:3
              </span>
            </div>

            <h3 className="text-xs sm:text-sm font-bold text-[#25272B] leading-tight line-clamp-2 pt-1 group-hover:text-[#3457E5] transition-colors">
              {book.title}
            </h3>
          </div>

          {/* Explicit Placeholder Notice */}
          <div className="pt-1.5 border-t border-[#E8DFC9]/70 flex items-center justify-between text-[8px] sm:text-[9px] text-[#25272B]/50 font-mono">
            <span>BÌA MẪU</span>
            <span>200×300</span>
          </div>
        </a>

        {/* Book Information */}
        <div className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#3457E5]">
            {book.category}
          </span>
          <h3 className="text-sm sm:text-base font-extrabold text-[#25272B] tracking-tight leading-snug line-clamp-1">
            <a
              href={detailHref}
              className="hover:text-[#3457E5] hover:underline transition-colors focus:outline-hidden"
            >
              {book.title}
            </a>
          </h3>
          <p className="text-xs text-[#25272B]/70 font-medium">
            {book.author}
          </p>
        </div>
      </div>

      {/* Price & Action Button (UI Demonstration only) */}
      <div className="pt-4 mt-3 border-t border-[#E8DFC9]/60 flex items-center justify-between gap-2">
        <span className="text-base sm:text-lg font-black text-[#25272B]">
          {book.priceFormatted}
        </span>

        <div className="flex items-center gap-1.5">
          <a
            href={detailHref}
            className="px-2.5 py-1.5 rounded-xl border border-[#E8DFC9] hover:border-[#3457E5] bg-white text-[#25272B] text-xs font-semibold hover:text-[#3457E5] transition-colors"
          >
            Chi tiết
          </a>

          <button
            type="button"
            disabled
            title="Tính năng mua sách đang phát triển / Cart pending"
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
}
