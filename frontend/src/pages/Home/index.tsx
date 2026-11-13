import { HeroSection } from './components/HeroSection'
import { CategorySection } from './components/CategorySection'

export function Home() {
  return (
    <main className="flex-1 w-full bg-[#FFF8EF]">
      <HeroSection />
      <CategorySection />
    </main>
  )
}
