import type { Book, SortOption } from '../../../types/book'
import { BookCard } from './BookCard'

interface BookGridProps {
  books: Book[]
  totalBooksCount: number
  sortOption: SortOption
  onSortChange: (option: SortOption) => void
  onClearFilters: () => void
  isFiltered: boolean
}

export function BookGrid({
  books,
  totalBooksCount,
  sortOption,
  onSortChange,
  onClearFilters,
  isFiltered,
}: BookGridProps) {
  return (
    <div className="space-y-6">
      {/* TOP CONTROLS: RESULT COUNT & SORT BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8DFC9]">
        <div className="text-xs sm:text-sm text-[#25272B]/75 font-medium">
          Showing <span className="font-bold text-[#25272B]">{books.length}</span> of{' '}
          <span className="font-bold text-[#25272B]">{totalBooksCount}</span> books
          {isFiltered && (
            <button
              type="button"
              onClick={onClearFilters}
              className="ml-3 text-xs font-bold text-[#F4775B] hover:underline"
            >
              (Clear filters • Xóa bộ lọc)
            </button>
          )}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort-select" className="text-xs font-bold text-[#25272B]/70 shrink-0">
            Sort by:
          </label>
          <select
            id="sort-select"
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="px-3 py-1.5 text-xs sm:text-sm bg-white text-[#25272B] rounded-xl border border-[#E8DFC9] focus:outline-hidden focus:border-[#3457E5] focus:ring-1 focus:ring-[#3457E5]"
          >
            <option value="recommended">Recommended (Mặc định)</option>
            <option value="title-asc">Title: A–Z (Tên sách A–Z)</option>
            <option value="price-asc">Price: Low to High (Giá: Thấp đến Cao)</option>
            <option value="price-desc">Price: High to Low (Giá: Cao đến Thấp)</option>
          </select>
        </div>
      </div>

      {/* BOOK LISTING / EMPTY STATE */}
      {books.length === 0 ? (
        <div className="bg-[#FFFDF9] rounded-3xl border border-[#E8DFC9] p-10 sm:p-14 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#FFF0E6] text-[#F4775B] flex items-center justify-center">
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-[#25272B]">
            No books found. • Không tìm thấy sách nào.
          </h3>

          <p className="text-xs sm:text-sm text-[#25272B]/70 max-w-md mx-auto leading-relaxed">
            We couldn't find any titles matching your search and category selection. Try using different keywords or resetting filters.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={onClearFilters}
              className="px-6 py-2.5 rounded-xl bg-[#3457E5] hover:bg-[#2844BC] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
            >
              Clear Filters • Xóa tất cả bộ lọc
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  )
}

