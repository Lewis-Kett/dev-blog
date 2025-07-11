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
    <section className="w-full">
      <div className="py-24">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[Autoscroll({
            speed: 1
          })]}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2">
                <div className="h-[240px] relative rounded-2xl overflow-hidden">
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
