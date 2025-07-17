'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { FeedbackCard } from '../card'
import { feedbackCarouselContent } from '@/content'
import AutoPlay from 'embla-carousel-autoplay'

const FeedbackCarousel = () => {
  return (
    <section className="mx-auto md:max-w-4/5 xl:max-w-2/3 mb-36">
      <div className="px-5 pt-24 pb-12">
        <h1 className="pb-5 text-3xl md:text-5xl">Expert Feedback</h1>
        <p className="text-lg">
          Read insights and praises from mentors and peers who have guided and witnessed my professional growth.
        </p>
      </div>
      <div className="mx-5">
        <Carousel
          className="flex items-center justify-center"
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            AutoPlay({
              delay: 6000,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent>
            {feedbackCarouselContent.map(({ name, title, company, comments }, i) => (
              <CarouselItem key={name + i} className="md:basis-1/2 lg:basis-1/3">
                <FeedbackCard name={name} title={title} company={company} comments={comments} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}

export { FeedbackCarousel }
