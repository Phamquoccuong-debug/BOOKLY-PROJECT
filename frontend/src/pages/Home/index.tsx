import { HeroSection } from './components/HeroSection'
import { CategorySection } from './components/CategorySection'
import { FeaturedBooks } from './components/FeaturedBooks'
import { EditorialBanner } from './components/EditorialBanner'

export function Home() {
  return (
    <main className="flex-1 w-full bg-[#FFF8EF]">
      <HeroSection />
      <CategorySection />
      <FeaturedBooks />
      <EditorialBanner />
    </main>
  )
}
