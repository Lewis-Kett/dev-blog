import { Hero } from '@/components/custom/hero'
import { HomeCarousel } from '@/components/custom/carousel'

export default function Home() {
  return (
    <main className="container mx-auto mt-10">
      <Hero />
      <HomeCarousel />
    </main>
  );
}
