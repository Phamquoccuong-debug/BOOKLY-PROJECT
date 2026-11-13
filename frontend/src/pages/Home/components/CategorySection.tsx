import React from 'react'

interface CategoryItem {
  id: string
  title: string
  titleVi: string
  descriptionVi: string
  accentColor: string
  accentBg: string
  accentBorder: string
  icon: (props: { className?: string; color: string }) => React.JSX.Element
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'fiction-literature',
    title: 'Fiction & Literature',
    titleVi: 'Văn học & Tiểu thuyết',
    descriptionVi: 'Tiểu thuyết kinh điển, văn học đương đại và những áng thơ lay động tâm hồn.',
    accentColor: '#F4775B', // Coral
    accentBg: 'bg-[#F4775B]/10',
    accentBorder: 'border-[#F4775B]/30',
    icon: ({ className, color }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 2v20" />
        <path d="M12 6h5" />
        <path d="M12 10h5" />
      </svg>
    ),
  },
  {
    id: 'personal-growth',
    title: 'Personal Growth',
    titleVi: 'Phát triển bản thân',
    descriptionVi: 'Khai phóng tiềm năng, rèn luyện thói quen tích cực và tìm kiếm sự cân bằng.',
    accentColor: '#2D6A4F', // Darker readable tint of Soft Mint (#B9DDCC)
    accentBg: 'bg-[#B9DDCC]/35',
    accentBorder: 'border-[#B9DDCC]',
    icon: ({ className, color }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7Z" />
        <path d="M9 21h6" />
        <path d="M12 6v3" />
      </svg>
    ),
  },
  {
    id: 'business-finance',
    title: 'Business & Finance',
    titleVi: 'Kinh doanh & Tài chính',
    descriptionVi: 'Tư duy chiến lược, nghệ thuật lãnh đạo và quản trị tài chính hiệu quả.',
    accentColor: '#9A6B00', // Darker readable tint of Butter Yellow (#F5D66B)
    accentBg: 'bg-[#F5D66B]/30',
    accentBorder: 'border-[#F5D66B]',
    icon: ({ className, color }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: 'science-technology',
    title: 'Science & Technology',
    titleVi: 'Khoa học & Công nghệ',
    descriptionVi: 'Khám phá bí ẩn vũ trụ, công nghệ tương lai và trí tuệ nhân tạo nhân loại.',
    accentColor: '#3457E5', // Cobalt Blue
    accentBg: 'bg-[#3457E5]/10',
    accentBorder: 'border-[#3457E5]/30',
    icon: ({ className, color }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 21a9 9 0 0 0 9-9" />
        <path d="M3 12a9 9 0 0 0 9 9" />
        <path d="M12 3a9 9 0 0 0-9 9" />
        <path d="M21 12a9 9 0 0 0-9-9" />
      </svg>
    ),
  },
]

export function CategorySection() {
  return (
    <section
      aria-labelledby="category-heading"
      className="relative bg-[#FFF8EF] py-14 sm:py-18 md:py-22 border-t border-[#E8DFC9]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="max-w-2xl mb-10 sm:mb-14 space-y-3">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E6] border border-[#F4775B]/20">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#F4775B]"
              aria-hidden="true"
            />
            <p className="text-xs font-bold tracking-widest text-[#F4775B] uppercase">
              FIND YOUR NEXT READ • TÌM CUỐN SÁCH TIẾP THEO
            </p>
          </div>

          {/* Heading */}
          <h2
            id="category-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#25272B] tracking-tight leading-tight"
          >
            Khám phá theo thể loại.
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#25272B]/75 leading-relaxed">
            Từ những câu chuyện lôi cuốn đến những góc nhìn mới mẻ, hãy tìm một giá sách dành riêng cho bạn.
          </p>
        </div>

        {/* 4 CATEGORY CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const IconComponent = cat.icon
            return (
              <div
                key={cat.id}
                className="group relative bg-[#FFFDF9] rounded-2xl border border-[#E8DFC9] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[#3457E5]/40 hover:shadow-xs"
              >
                {/* Top Accent Strip */}
                <div
                  className="absolute top-0 left-6 right-6 h-1 rounded-b-sm"
                  style={{ backgroundColor: cat.accentColor }}
                  aria-hidden="true"
                />

                <div className="space-y-4 pt-1">
                  {/* Category Decorative Icon Badge */}
                  <div
                    className={`w-12 h-12 rounded-xl ${cat.accentBg} ${cat.accentBorder} border flex items-center justify-center transition-transform group-hover:scale-105 duration-200`}
                  >
                    <IconComponent className="w-6 h-6" color={cat.accentColor} />
                  </div>

                  {/* Title & English Subtitle */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#25272B] tracking-tight group-hover:text-[#3457E5] transition-colors">
                      {cat.titleVi}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#25272B]/50 mt-0.5">
                      {cat.title}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#25272B]/70 leading-relaxed">
                    {cat.descriptionVi}
                  </p>
                </div>

                {/* Subtle Shelf Label (Visual indicator without claiming filter/fake link) */}
                <div className="pt-5 mt-4 border-t border-[#E8DFC9]/60 flex items-center justify-between text-xs font-semibold text-[#25272B]/60">
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: cat.accentColor }}
                      aria-hidden="true"
                    />
                    Kệ sách tuyển chọn
                  </span>
                  <span
                    className="text-xs font-bold group-hover:translate-x-1 transition-transform"
                    style={{ color: cat.accentColor }}
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

