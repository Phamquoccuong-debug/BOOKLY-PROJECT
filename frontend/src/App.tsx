import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8EF] text-[#25272B] font-sans antialiased selection:bg-[#F5D66B]/60 selection:text-[#25272B]">
      {/* Top Header Navigation */}
      <Header />

      {/* Main Home Page Content */}
      <Home />

      {/* Bottom Footer */}
      <Footer />
    </div>
  )
}

export default App
