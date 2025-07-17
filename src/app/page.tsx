import { Hero } from '@/components/custom/hero'
import { FeedbackCarousel, HomeCarousel } from '@/components/custom/carousel'
import { Projects, PassionProject } from '@/components/custom/projects'

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeCarousel />
      <Projects />
      <PassionProject />
      <FeedbackCarousel />
    </main>
  )
}
