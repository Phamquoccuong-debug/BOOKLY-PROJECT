interface NewArrivalBook {
  id: string
  title: string
  author: string
  price: string
  label: string
  coverBg: string
  coverAccent: string
}

const NEW_ARRIVALS: NewArrivalBook[] = [
  {
    id: 'arrival-project-hail-mary',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    price: '$22.00',
    label: 'NEW ARRIVAL',
    coverBg: 'bg-[#0B132B] text-white',
    coverAccent: '#F5D66B',
  },
  {
    id: 'arrival-the-creative-act',
    title: 'The Creative Act',
    author: 'Rick Rubin',
    price: '$24.00',
    label: 'NEW ARRIVAL',
    coverBg: 'bg-[#EDE7DD] text-[#25272B]',
    coverAccent: '#F4775B',
  },
  {
    id: 'arrival-educated',
    title: 'Educated',
    author: 'Tara Westover',
    price: '$20.00',
    label: 'NEW ARRIVAL',
    coverBg: 'bg-[#7C2D12] text-white',
    coverAccent: '#FFF8EF',
  },
  {
    id: 'arrival-designing-data-intensive',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    price: '$42.00',
    label: 'NEW ARRIVAL',
    coverBg: 'bg-[#1E3A8A] text-white',
    coverAccent: '#B9DDCC',
  },
]

export function NewArrivals() {
  return (
    <section
      id="new-arrivals"
      aria-labelledby="new-arrivals-heading"
      className="relative bg-[#FFF8EF] py-14 sm:py-18 md:py-22 border-t border-[#E8DFC9]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="max-w-2xl mb-10 sm:mb-14 space-y-3">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3457E5]/10 border border-[#3457E5]/20">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#3457E5]"
              aria-hidden="true"
            />
            <p className="text-xs font-bold tracking-widest text-[#3457E5] uppercase">
              JUST LANDED • MỚI CẬP BẾN
            </p>
          </div>

          {/* Heading */}
          <h2
            id="new-arrivals-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#25272B] tracking-tight leading-tight"
          >
            Fresh stories, fresh perspectives.
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#25272B]/75 leading-relaxed">
            Meet the latest additions to our shelves.
          </p>
        </div>

        {/* 4-COLUMN BOOK GRID (2-column on tablet & mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {NEW_ARRIVALS.map((book) => (
            <article
              key={book.id}
              className="group bg-[#FFFDF9] rounded-2xl border border-[#E8DFC9] p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[#3457E5]/35 hover:shadow-xs"
            >
              <div>
                {/* Book Cover Container with standard 2:3 ratio */}
                <div className="relative w-full aspect-[2/3] mb-4 rounded-xl overflow-hidden bg-[#FAF7F0] border border-[#E8DFC9]/70 flex flex-col justify-between p-3.5 sm:p-4 border-l-4 border-l-[#25272B]/20">
                  {/* Top "NEW ARRIVAL" Label Badge */}
                  <div className="flex items-start justify-between gap-1.5">
                    <span className="inline-block text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-md border bg-[#3457E5]/10 text-[#3457E5] border-[#3457E5]/30">
                      {book.label}
                    </span>
                  </div>

                  {/* Visual Book Cover Area (Placeholder representation with proper aspect ratio) */}
                  <div className="my-auto space-y-1.5 py-2">
                    <div
                      className={`w-full h-20 sm:h-24 rounded-lg ${book.coverBg} p-2.5 flex flex-col justify-end border border-white/20`}
                    >
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider block"
                        style={{ color: book.coverAccent }}
                      >
                        FIRST EDITION
                      </span>
                      <div className="w-5 h-0.5 bg-white/40 my-1" />
                      <span className="text-[8px] opacity-75 italic">
                        Aspect Ratio 2:3
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-[#25272B] leading-tight line-clamp-2 pt-1">
                      {book.title}
                    </h3>
                  </div>

                  {/* Explicit Placeholder Notice */}
                  <div className="pt-1.5 border-t border-[#E8DFC9]/70 flex items-center justify-between text-[8px] sm:text-[9px] text-[#25272B]/50 font-mono">
                    <span>COVER PLACEHOLDER</span>
                    <span>200×300</span>
                  </div>
                </div>

                {/* Book Information */}
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-extrabold text-[#25272B] tracking-tight leading-snug line-clamp-1 group-hover:text-[#3457E5] transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-xs text-[#25272B]/70 font-medium">
                    {book.author}
                  </p>
                </div>
              </div>

              {/* Price & Non-functional UI Action Button */}
              <div className="pt-4 mt-3 border-t border-[#E8DFC9]/60 flex items-center justify-between gap-2">
                <span className="text-base sm:text-lg font-black text-[#25272B]">
                  {book.price}
                </span>

                <button
                  type="button"
                  title="Tính năng xem chi tiết đang phát triển / Details coming soon"
                  aria-label={`Xem chi tiết ${book.title} (UI mẫu)`}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-[#E8DFC9] bg-white hover:bg-slate-50 text-[#25272B] text-xs font-semibold transition-colors cursor-default"
                >
                  <span>Chi tiết</span>
                  <svg
                    className="w-3.5 h-3.5 text-[#3457E5]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

