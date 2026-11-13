import type { BookCategory } from '../../../types/book'

interface BookFiltersProps {
  selectedCategory: BookCategory
  onSelectCategory: (category: BookCategory) => void
  categoryCounts: Record<BookCategory, number>
}

const CATEGORIES: { key: BookCategory; label: string; labelVi: string }[] = [
  { key: 'All', label: 'All Books', labelVi: 'Tất cả sách' },
  { key: 'Fiction & Literature', label: 'Fiction & Literature', labelVi: 'Văn học & Tiểu thuyết' },
  { key: 'Personal Growth', label: 'Personal Growth', labelVi: 'Phát triển bản thân' },
  { key: 'Business & Finance', label: 'Business & Finance', labelVi: 'Kinh doanh & Tài chính' },
  { key: 'Science & Technology', label: 'Science & Technology', labelVi: 'Khoa học & Công nghệ' },
]

export function BookFilters({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}: BookFiltersProps) {
  return (
    <div className="space-y-4">
      {/* DESKTOP & TABLET SIDEBAR / LIST */}
      <div className="hidden lg:block bg-[#FFFDF9] rounded-2xl border border-[#E8DFC9] p-5 space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#25272B] pb-2 border-b border-[#E8DFC9]/70">
          Categories • Thể loại
        </h3>

        <div className="space-y-1">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.key
            const count = categoryCounts[cat.key] || 0
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => onSelectCategory(cat.key)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left ${
                  isSelected
                    ? 'bg-[#3457E5] text-white shadow-xs'
                    : 'text-[#25272B]/80 hover:bg-[#FFF8EF] hover:text-[#3457E5]'
                }`}
              >
                <div className="flex flex-col">
                  <span>{cat.label}</span>
                  <span className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-[#25272B]/50'}`}>
                    {cat.labelVi}
                  </span>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#25272B]/60'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* MOBILE HORIZONTALLY SCROLLABLE CHIPS */}
      <div className="lg:hidden w-full overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-2 whitespace-nowrap min-w-max">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.key
            const count = categoryCounts[cat.key] || 0
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => onSelectCategory(cat.key)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-[#3457E5] text-white shadow-xs'
                    : 'bg-[#FFFDF9] text-[#25272B]/80 border border-[#E8DFC9] hover:border-[#3457E5]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#25272B]/60'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

