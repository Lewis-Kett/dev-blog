import Image from 'next/image'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const heroImageVariants = cva('relative overflow-hidden rounded-full', {
  variants: {
    size: {
      small: 'h-[84px] w-[84px]',
      medium: 'h-[100px] w-[100px]',
      large: 'h-[148px] w-[148px]',
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

interface HeroImageProps extends VariantProps<typeof heroImageVariants> {
  src: string
  alt: string
  className?: string
  sizes: string
}

export const HeroImage = ({ src, alt, className, sizes, size }: HeroImageProps) => {
  return (
    <div className={cn(heroImageVariants({ size }), className)}>
      <Image src={src} alt={alt} fill priority className="object-cover" sizes={sizes} />
    </div>
  )
}
