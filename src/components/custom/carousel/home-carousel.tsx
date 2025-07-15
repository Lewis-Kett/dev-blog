'use client'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoscroll from 'embla-carousel-auto-scroll'
import { images } from './carousel-data'

export const HomeCarousel = () => {
  return (
    <section className="rounded-b-2xl bg-white md:rounded-b-[60px]">
      <div className="mx-auto px-0 pb-24 md:px-5 md:pb-20 lg:max-w-4/5 lg:pb-40 xl:max-w-2/3">
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
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
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
