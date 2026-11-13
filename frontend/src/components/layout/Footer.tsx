const CURRENT_YEAR = 2026

export function Footer() {
  const quickLinks = [
    { label: 'Sách bán chạy nổi bật', href: '#bestsellers' },
    { label: 'Sách mới phát hành', href: '#new-arrivals' },
    { label: 'Danh mục thể loại', href: '#categories' },
    { label: 'Gợi ý đọc sách', href: '#recommendations' },
    { label: 'Gương mặt tác giả', href: '#authors' },
  ]

  const customerCareLinks = [
    { label: 'Trung tâm trợ giúp & FAQ', href: '#help' },
    { label: 'Tra cứu đơn hàng', href: '#track' },
    { label: 'Chính sách vận chuyển', href: '#shipping' },
    { label: 'Đổi trả & Hoàn tiền', href: '#returns' },
    { label: 'Thẻ quà tặng', href: '#gift-cards' },
  ]

  return (
    <footer className="bg-[#F6F2EA] text-slate-900 border-t border-orange-200/60 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lưới nội dung Footer chính */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-orange-200/50">
          {/* Cột 1: Thương hiệu & Giới thiệu */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#discover" className="inline-flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                  <path d="M6 2v20" />
                  <path d="M12 2v8l3-2.5 3 2.5V2" fill="#F97316" stroke="#EA580C" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                BOOK<span className="text-orange-500">LY</span>
              </span>
            </a>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Hiệu sách trực tuyến thân thiện dành cho bạn. Khám phá những câu chuyện lôi cuốn, tiểu sử truyền cảm hứng và các tác phẩm kinh điển được giao tận tay với tình yêu thương.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {/* Huy hiệu cam kết */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 rounded-full border border-orange-200/60 text-xs font-semibold text-slate-700 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Hơn 50.000 đầu sách
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 rounded-full border border-orange-200/60 text-xs font-semibold text-slate-700 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Giao hàng nhanh chóng
              </div>
            </div>
          </div>

          {/* Cột 2: Khám phá */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Khám phá
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Chăm sóc khách hàng */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Chăm sóc khách hàng
            </h3>
            <ul className="space-y-2.5 text-sm">
              {customerCareLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 4: Thông tin liên hệ & hỗ trợ */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Liên hệ & Hỗ trợ
            </h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <svg
                  className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <div>
                  <p className="font-medium text-slate-800">Hỗ trợ qua Email</p>
                  <a
                    href="mailto:support@bookly.com"
                    className="hover:text-blue-600 hover:underline transition-colors"
                  >
                    support@bookly.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <svg
                  className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p className="font-medium text-slate-800">Tổng đài miễn phí</p>
                  <a
                    href="tel:18005552665"
                    className="hover:text-blue-600 hover:underline transition-colors"
                  >
                    1-800-555-BOOK (2665)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <svg
                  className="w-5 h-5 text-slate-400 shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="font-medium text-slate-800">Giờ làm việc</p>
                  <p className="text-xs text-slate-500">Thứ 2 - Thứ 7: 9:00 – 20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thanh bản quyền & điều khoản */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {CURRENT_YEAR} Hiệu sách trực tuyến BOOKLY. Bảo lưu mọi quyền.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-800 transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#terms" className="hover:text-slate-800 transition-colors">
              Điều khoản dịch vụ
            </a>
            <a href="#cookies" className="hover:text-slate-800 transition-colors">
              Cài đặt Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
