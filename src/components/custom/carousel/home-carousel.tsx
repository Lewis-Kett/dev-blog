'use client'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoscroll from 'embla-carousel-auto-scroll'

const images = [
  '/placeholder-1.jpg',
  '/placeholder-2.jpg',
  '/placeholder-3.jpg',
  '/placeholder-4.jpg',
  '/placeholder-5.jpg',
]

export const HomeCarousel = () => {
  return (
    <section className="md:rounded-b-[60px] rounded-b-2xl bg-white">
      <div className="mx-auto px-0 md:px-5 lg:max-w-4/5 pb-24 md:pb-20 lg:pb-40">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoscroll({
              speed: 1,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative h-[240px] overflow-hidden rounded-2xl">
                  <Image
                    src={image}
                    alt={`Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
