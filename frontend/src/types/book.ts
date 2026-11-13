export type BookCategory =
  | 'All'
  | 'Fiction & Literature'
  | 'Personal Growth'
  | 'Business & Finance'
  | 'Science & Technology'

export type SortOption =
  | 'recommended'
  | 'title-asc'
  | 'price-asc'
  | 'price-desc'

export interface Book {
  id: string
  title: string
  author: string
  category: BookCategory
  categoryVi: string
  price: number
  priceFormatted: string
  label?: string
  labelColor?: {
    bg: string
    text: string
    border: string
  }
  description: string
  descriptionVi: string
  coverBg: string
  coverAccent: string
}
