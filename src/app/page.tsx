import { Hero } from '@/components/custom/hero'
import { HomeCarousel } from '@/components/custom/carousel'
import { Projects } from '@/components/custom/projects'

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeCarousel />
      <Projects />
    </main>
  )
}
