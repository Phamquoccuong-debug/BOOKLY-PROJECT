import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const cartItemCount = 3

  const navLinks = [
    { label: 'Khám phá', href: '#discover' },
    { label: 'Sách', href: '#books' },
    { label: 'Thể loại', href: '#categories' },
  ]

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8EF] border-b border-[#E8DFC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3 md:gap-6">
          {/* KHU VỰC 1 (TRÁI): LOGO BOOKLY */}
          <div className="flex items-center">
            <a
              href="#discover"
              className="flex items-center gap-2.5 group focus:outline-hidden focus:ring-2 focus:ring-[#3457E5]/40 rounded-lg p-1 transition-transform"
              aria-label="Trang chủ BOOKLY"
            >
              {/* Biểu tượng sách editorial viền nét với bookmark Coral */}
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

              {/* Typography Logo */}
              <div className="flex items-baseline tracking-tight">
                <span className="text-2xl font-black text-[#3457E5] tracking-tighter">
                  BOOKLY
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4775B] ml-1 mb-1" aria-hidden="true" />
              </div>
            </a>
          </div>

          {/* KHU VỰC 2 (GIỮA): ĐIỀU HƯỚNG */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Menu chính"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 text-sm font-semibold tracking-wide text-[#25272B] hover:text-[#3457E5] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#3457E5] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* KHU VỰC 3 (PHẢI): TÌM KIẾM, TÀI KHOẢN & GIỎ HÀNG */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Ô tìm kiếm Desktop */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#25272B]/50">
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
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm sách, tác giả..."
                  className="w-44 lg:w-56 pl-9 pr-3.5 py-1.5 text-xs lg:text-sm bg-white/80 hover:bg-white focus:bg-white text-[#25272B] placeholder:text-[#25272B]/45 rounded-full border border-[#E8DFC9] focus:outline-hidden focus:border-[#3457E5] focus:ring-2 focus:ring-[#3457E5]/15 transition-all"
                  aria-label="Tìm kiếm sách"
                />
              </div>
            </div>

            {/* Nút kích hoạt tìm kiếm Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-[#25272B] hover:text-[#3457E5] rounded-lg transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#3457E5]/40"
              aria-label="Mở tìm kiếm"
            >
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
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Nút Tài khoản (Ghost Button) */}
            <a
              href="#account"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs lg:text-sm font-semibold text-[#25272B] hover:text-[#3457E5] hover:bg-[#3457E5]/8 rounded-full border border-transparent hover:border-[#E8DFC9] transition-all"
            >
              <svg
                className="w-4 h-4 text-[#25272B]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Tài khoản</span>
            </a>

            {/* Nút Giỏ hàng kèm Badge số lượng */}
            <a
              href="#cart"
              className="relative p-2 text-[#25272B] hover:text-[#3457E5] rounded-full hover:bg-white/80 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#3457E5]/40"
              aria-label={`Giỏ hàng với ${cartItemCount} sản phẩm`}
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#F4775B] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {cartItemCount}
                </span>
              )}
            </a>

            {/* Nút mở menu Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#25272B] hover:text-[#3457E5] rounded-lg transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#3457E5]/40"
              aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
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
              ) : (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MENU DI ĐỘNG (DRAWER) */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E8DFC9] py-4 pb-6 space-y-4">
            {/* Ô tìm kiếm di động */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#25272B]/50">
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
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm sách, tác giả..."
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-white text-[#25272B] placeholder:text-[#25272B]/45 rounded-xl border border-[#E8DFC9] focus:outline-hidden focus:border-[#3457E5] focus:ring-2 focus:ring-[#3457E5]/15"
                aria-label="Tìm kiếm sách trên di động"
              />
            </div>

            {/* Danh sách liên kết điều hướng */}
            <nav className="flex flex-col gap-1" aria-label="Menu di động">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleMobileNavClick}
                  className="min-h-[44px] flex items-center px-3.5 py-2.5 rounded-xl text-base font-medium text-[#25272B] hover:text-[#3457E5] hover:bg-white/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Nút tài khoản di động */}
            <div className="pt-2 border-t border-[#E8DFC9]">
              <a
                href="#account"
                onClick={handleMobileNavClick}
                className="min-h-[44px] w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#E8DFC9] bg-white/70 hover:bg-white text-[#25272B] hover:text-[#3457E5] font-semibold text-sm transition-colors"
              >
                <svg
                  className="w-4 h-4 text-[#25272B]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Tài khoản của tôi</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
