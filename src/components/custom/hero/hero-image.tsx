import Image from 'next/image'

export const HeroImage = () => {
  return (
    <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full">
      <Image
        src="/lewis.webp"
        alt="Lewis Kett profile picture"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
