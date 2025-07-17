import { Hero } from '@/components/custom/hero'
import { FeedbackCarousel, HomeCarousel } from '@/components/custom/carousel'
import { Projects, PassionProject } from '@/components/custom/projects'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeCarousel />
      <Projects />
      <PassionProject />
      <FeedbackCarousel />
      <section className="bg-[#454545] text-white">
        <div className="mx-auto flex flex-col gap-8 bg-[#454545] px-5 pt-12 pb-24 lg:max-w-4/5 xl:max-w-2/3">
          <div>
            <h1 className="pb-5 text-3xl md:text-5xl">Interested in connecting?</h1>
            <p className="text-lg">Let’s talk projects, collaborations, or anything design!</p>
          </div>
          <Button size="lg" className="md:w-60">
            Book a call
          </Button>
        </div>
      </section>
    </main>
  )
}
