import { useState, useEffect } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { BooksPage } from './pages/Books'
import { BookDetailPage } from './pages/BookDetail'

type AppRoute =
  | { name: 'home' }
  | { name: 'books' }
  | { name: 'book-detail'; bookId: string }

function parseHashRoute(hashString: string): AppRoute {
  const hash = hashString.trim()

  // Match #/books/:id or #books/:id (where id is non-empty)
  const detailMatch = hash.match(/^#\/?books\/([^/?#]+)$/)
  if (detailMatch && detailMatch[1]) {
    return { name: 'book-detail', bookId: decodeURIComponent(detailMatch[1]) }
  }

  // Match #books or #/books
  if (hash === '#books' || hash === '#/books') {
    return { name: 'books' }
  }

  // Default to home for #discover, #home, empty string, etc.
  return { name: 'home' }
}

function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() =>
    parseHashRoute(window.location.hash)
  )

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = parseHashRoute(window.location.hash)
      setCurrentRoute(nextRoute)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8EF] text-[#25272B] font-sans antialiased selection:bg-[#F5D66B]/60 selection:text-[#25272B]">
      {/* Top Header Navigation */}
      <Header />

      {/* Dynamic View Router */}
      {currentRoute.name === 'book-detail' ? (
        <BookDetailPage bookId={currentRoute.bookId} />
      ) : currentRoute.name === 'books' ? (
        <BooksPage />
      ) : (
        <Home />
      )}

      {/* Bottom Footer */}
      <Footer />
    </div>
  )
}

export default App
