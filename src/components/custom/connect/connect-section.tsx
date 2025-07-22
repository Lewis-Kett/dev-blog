import { Button } from '@/components/ui/button'

export function ConnectSection() {
  return (
    <section className="bg-dark-section text-white">
      <div className="bg-dark-section mx-auto flex flex-col gap-8 px-5 pt-12 pb-24 md:pt-20 lg:max-w-4/5 lg:py-24 xl:max-w-2/3">
        <div>
          <h1 className="pb-5 text-3xl md:text-5xl">Interested in connecting?</h1>
          <p className="text-lg">Let&apos;s talk projects, collaborations, or anything design!</p>
        </div>
        <Button size="lg" className="md:w-60">
          Book a call
        </Button>
      </div>
    </section>
  )
}
