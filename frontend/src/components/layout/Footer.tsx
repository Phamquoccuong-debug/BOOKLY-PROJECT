const CURRENT_YEAR = 2026

export function Footer() {
  const exploreLinks = [
    { label: 'Home • Trang chủ', href: '#discover' },
    { label: 'Books • Sách', href: '#books' },
    { label: 'Categories • Thể loại', href: '#categories' },
  ]

  const helpLinks = [
    { label: 'Contact • Liên hệ', href: '#contact' },
    { label: 'FAQ • Hỏi đáp', href: '#faq' },
    { label: 'Shipping Information • Vận chuyển', href: '#shipping' },
  ]

  return (
    <footer className="bg-[#202226] text-[#FFF8EF] border-t-2 border-[#E8DFC9]/30 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN FOOTER GRID (Desktop: 4 columns, Tablet: 2 columns, Mobile: stacked) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* AREA 1: BRAND (Spans 4 columns on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#discover"
              className="inline-flex items-center gap-2.5 group focus:outline-hidden focus:ring-2 focus:ring-[#3457E5]/50 rounded-lg"
              aria-label="BOOKLY Homepage"
            >
              {/* Editorial line-art book emblem matching Header */}
              <div className="w-9 h-9 rounded-lg border-2 border-[#3457E5] bg-white flex items-center justify-center text-[#3457E5] shadow-xs group-hover:-rotate-3 transition-transform duration-200">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3457E5"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                  <path d="M6 2v20" />
                  <path d="M12 2v7l2.5-2 2.5 2V2" fill="#F4775B" stroke="#F4775B" strokeWidth="1.2" />
                </svg>
              </div>

              <div className="flex items-baseline tracking-tight">
                <span className="text-2xl font-black text-white tracking-tighter">
                  BOOK<span className="text-[#3457E5]">LY</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4775B] ml-1 mb-1" aria-hidden="true" />
              </div>
            </a>

            {/* Short Description */}
            <p className="text-[#E8DFC9]/80 text-sm sm:text-base leading-relaxed max-w-sm">
              A little corner for curious minds and people who love good stories.
            </p>
            <p className="text-xs text-[#E8DFC9]/60 leading-relaxed italic">
              Góc nhỏ dành cho những tâm hồn tò mò và những người say mê câu chuyện hay.
            </p>
          </div>

          {/* AREA 2: EXPLORE (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F5D66B]">
              Explore • Khám phá
            </h3>
            <ul className="space-y-2.5 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#E8DFC9]/80 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AREA 3: HELP (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F5D66B]">
              Help • Trợ giúp
            </h3>
            <ul className="space-y-2.5 text-sm">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#E8DFC9]/80 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AREA 4: NEWSLETTER (Spans 4 columns on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                Stories worth opening.
              </h3>
              <p className="text-xs sm:text-sm text-[#E8DFC9]/80 mt-1 leading-relaxed">
                Get book recommendations and updates from our shelves.
              </p>
            </div>

            {/* Newsletter Subscription Form (UI Placeholder) */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-2.5"
              aria-label="Newsletter Subscription Form (UI Preview)"
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  disabled
                  placeholder="Your email address • Email của bạn"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-white/10 text-white placeholder:text-[#E8DFC9]/50 rounded-xl border border-white/20 cursor-not-allowed opacity-90 focus:outline-hidden"
                  aria-label="Your email address (UI mẫu)"
                />
                <button
                  type="button"
                  disabled
                  title="Dịch vụ bản tin đang được tích hợp / Newsletter service coming soon"
                  className="px-5 py-2.5 rounded-xl bg-[#3457E5] text-white font-bold text-xs sm:text-sm shrink-0 cursor-default opacity-95 transition-opacity hover:bg-[#2B47C4]"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-[11px] text-[#E8DFC9]/50 italic">
                * Bản tin mẫu • Chưa kết nối backend (UI placeholder only).
              </p>
            </form>
          </div>
        </div>

        {/* BOTTOM BAR: COPYRIGHT & LEGAL */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8DFC9]/70">
          <p>© {CURRENT_YEAR} BOOKLY. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
