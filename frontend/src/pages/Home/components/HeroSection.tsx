interface HeroBookPlaceholder {
  id: string
  title: string
  author: string
  category: string
  tag: string
  bgPattern: string
  accentColor: string
  rotationClass: string
  transformClass: string
}

const FEATURED_COVERS: HeroBookPlaceholder[] = [
  {
    id: 'cover-1',
    title: 'The Architecture of Solitude',
    author: 'Elena Vance',
    category: 'Tiểu thuyết văn học',
    tag: 'Biên tập viên chọn',
    bgPattern: 'bg-[#2A3F6D] text-white',
    accentColor: '#F5D66B',
    rotationClass: '-rotate-4 sm:-rotate-6',
    transformClass: 'translate-y-2 sm:translate-y-4 -translate-x-4 sm:-translate-x-8',
  },
  {
    id: 'cover-2',
    title: 'Stories from the Deep Blue Horizon',
    author: 'Marcus Vance',
    category: 'Tản văn & Hồi ký',
    tag: 'Bán chạy nhất',
    bgPattern: 'bg-[#1E232A] text-[#FFF8EF]',
    accentColor: '#F4775B',
    rotationClass: 'rotate-2 sm:rotate-3',
    transformClass: 'translate-x-4 sm:translate-x-8 -translate-y-2 sm:-translate-y-3 z-20',
  },
]

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#FFF8EF] py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* CỘT TRÁI: TIÊU ĐỀ & KÊU GỌI HÀNH ĐỘNG */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E6] border border-[#F4775B]/25">
              <span
                className="w-2 h-2 rounded-full bg-[#F4775B]"
                aria-hidden="true"
              />
              <span className="text-xs font-bold tracking-widest text-[#F4775B] uppercase">
                THẾ GIỚI CỦA NHỮNG CÂU CHUYỆN
              </span>
            </div>

            {/* Tiêu đề chính phong cách Editorial */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#25272B] tracking-tight leading-[1.12]"
            >
              Tìm cuốn sách <br className="hidden sm:inline" />
              <span className="text-[#3457E5] underline decoration-[#F5D66B] decoration-wavy decoration-2 underline-offset-8">
                yêu thích tiếp theo
              </span>{' '}
              của bạn.
            </h1>

            {/* Mô tả giới thiệu */}
            <p className="text-base sm:text-lg text-[#25272B]/80 max-w-xl leading-relaxed">
              Khám phá những cuốn sách truyền cảm hứng, mở rộng góc nhìn và đồng hành cùng bạn trên mọi hành trình.
            </p>

            {/* Cụm nút kêu gọi hành động */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#books"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#3457E5] hover:bg-[#2B47C4] active:bg-[#203799] text-white font-bold text-base transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#3457E5]/50 shadow-xs cursor-pointer"
              >
                <span>Khám phá sách</span>
                <svg
                  className="w-5 h-5"
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

              <span className="text-xs sm:text-sm text-[#25272B]/60 font-medium sm:pl-2 text-center sm:text-left">
                Tuyển chọn hàng tuần • Miễn phí giao hàng cho đơn từ $35
              </span>
            </div>
          </div>

          {/* CỘT PHẢI: TRƯNG BÀY SÁCH VỚI HÌNH NỀN VÀNG BƠ */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0">
            {/* Khối nền đồ họa Butter Yellow (#F5D66B) */}
            <div
              className="absolute w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-3xl bg-[#F5D66B] -rotate-3 transition-transform duration-300 pointer-events-none"
              aria-hidden="true"
            />

            {/* Vòng viền trang trí phụ */}
            <div
              className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-3xl border-2 border-[#E8DFC9] rotate-6 pointer-events-none"
              aria-hidden="true"
            />

            {/* Cụm bìa sách nghệ thuật */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-md h-[340px] sm:h-[400px] flex items-center justify-center">
              {FEATURED_COVERS.map((book) => (
                <div
                  key={book.id}
                  className={`absolute w-44 sm:w-52 h-64 sm:h-76 rounded-2xl shadow-lg border border-[#E8DFC9] transition-all duration-300 hover:scale-105 hover:z-30 cursor-pointer ${book.transformClass} ${book.rotationClass}`}
                >
                  {/* Hiệu ứng gáy sách */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col justify-between p-5 bg-[#FAF7F0] border-l-4 border-l-[#25272B]/20">
                    {/* Thẻ meta trên đầu sách */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/90 text-[#25272B] border border-[#E8DFC9]">
                        {book.tag}
                      </span>
                      <span className="text-[10px] text-[#25272B]/60 font-medium">
                        {book.category}
                      </span>
                    </div>

                    {/* Vùng bìa sách minh họa */}
                    <div className="my-auto space-y-2 py-4">
                      <div
                        className={`w-full h-24 sm:h-28 rounded-xl ${book.bgPattern} p-3 flex flex-col justify-end border border-white/20`}
                      >
                        <span
                          className="text-[11px] font-bold uppercase tracking-wider block"
                          style={{ color: book.accentColor }}
                        >
                          Bookly Press
                        </span>
                        <div className="w-6 h-0.5 bg-white/40 my-1" />
                        <span className="text-[9px] text-white/70 italic">
                          Tỷ lệ bìa chuẩn 2:3
                        </span>
                      </div>

                      <h2 className="text-sm sm:text-base font-extrabold text-[#25272B] leading-tight line-clamp-2">
                        {book.title}
                      </h2>
                      <p className="text-xs text-[#25272B]/70 font-medium">
                        Tác giả: {book.author}
                      </p>
                    </div>

                    {/* Thông tin placeholder */}
                    <div className="pt-2 border-t border-[#E8DFC9]/70 flex items-center justify-between text-[9px] text-[#25272B]/50 font-mono">
                      <span>BÌA SÁCH MẪU</span>
                      <span>200×300</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
