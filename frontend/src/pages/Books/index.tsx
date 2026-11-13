import { useState, useMemo } from 'react'
import type { BookCategory, SortOption } from '../../types/book'
import { SAMPLE_BOOKS } from './data/booksData'
import { BookFilters } from './components/BookFilters'
import { BookGrid } from './components/BookGrid'

export function BooksPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<BookCategory>('All')
  const [sortOption, setSortOption] = useState<SortOption>('recommended')

  // Calculate total counts per category from sample dataset
  const categoryCounts = useMemo(() => {
    const counts: Record<BookCategory, number> = {
      All: SAMPLE_BOOKS.length,
      'Fiction & Literature': 0,
      'Personal Growth': 0,
      'Business & Finance': 0,
      'Science & Technology': 0,
    }

    SAMPLE_BOOKS.forEach((book) => {
      if (counts[book.category] !== undefined) {
        counts[book.category] += 1
      }
    })

    return counts
  }, [])

  // Filtered and Sorted Books list
  const filteredAndSortedBooks = useMemo(() => {
    const cleanQuery = searchQuery.trim().toLowerCase()

    // 1. Filter by category & search term
    const matched = SAMPLE_BOOKS.filter((book) => {
      const matchCategory =
        selectedCategory === 'All' || book.category === selectedCategory

      const matchSearch =
        cleanQuery === '' ||
        book.title.toLowerCase().includes(cleanQuery) ||
        book.author.toLowerCase().includes(cleanQuery)

      return matchCategory && matchSearch
    })

    // 2. Sort results
    switch (sortOption) {
      case 'title-asc':
        return [...matched].sort((a, b) => a.title.localeCompare(b.title))
      case 'price-asc':
        return [...matched].sort((a, b) => a.price - b.price)
      case 'price-desc':
        return [...matched].sort((a, b) => b.price - a.price)
      case 'recommended':
      default:
        return matched
    }
  }, [searchQuery, selectedCategory, sortOption])

  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('All')
    setSortOption('recommended')
  }

  const isFiltered =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'All' ||
    sortOption !== 'recommended'

  return (
    <main className="flex-1 w-full bg-[#FFF8EF] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* PAGE HEADER */}
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E6] border border-[#F4775B]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4775B]" aria-hidden="true" />
            <p className="text-xs font-bold tracking-widest text-[#F4775B] uppercase">
              THE BOOK COLLECTION • BỘ SƯU TẬP SÁCH
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#25272B] tracking-tight leading-tight">
            Explore our books.
          </h1>

          <p className="text-sm sm:text-base text-[#25272B]/80 leading-relaxed">
            Find your next favorite read from stories, ideas and perspectives worth discovering.
          </p>
        </div>

        {/* SEARCH BAR (Full width above product listing) */}
        <div className="relative max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#25272B]/50">
            <svg
              className="w-5 h-5"
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
            </svg>
          </div>

          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title or author name • Tìm theo tên sách hoặc tác giả..."
            className="w-full pl-11 pr-10 py-3 text-sm sm:text-base bg-white text-[#25272B] placeholder:text-[#25272B]/45 rounded-2xl border border-[#E8DFC9] focus:outline-hidden focus:border-[#3457E5] focus:ring-2 focus:ring-[#3457E5]/20 shadow-2xs transition-all"
            aria-label="Search books by title or author"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#25272B]/50 hover:text-[#25272B]"
              aria-label="Clear search input"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {/* 2-COLUMN LAYOUT: SIDEBAR (FILTERS) + GRID (SORT & BOOKS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* CATEGORY FILTER SIDEBAR */}
          <aside className="lg:col-span-3 w-full" aria-label="Book Category Filters">
            <BookFilters
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              categoryCounts={categoryCounts}
            />
          </aside>

          {/* MAIN PRODUCT GRID & CONTROLS */}
          <section className="lg:col-span-9 w-full" aria-label="Book Catalog">
            <BookGrid
              books={filteredAndSortedBooks}
              totalBooksCount={SAMPLE_BOOKS.length}
              sortOption={sortOption}
              onSortChange={setSortOption}
              onClearFilters={handleClearFilters}
              isFiltered={isFiltered}
            />
          </section>
        </div>
      </div>
    </main>
  )
}

