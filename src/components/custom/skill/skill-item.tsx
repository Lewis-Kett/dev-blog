import Image from 'next/image'
import { type Skill } from '@/content/skills-content'

export function SkillItem({ imagePath, name, years }: Skill) {
  return (
    <article className="flex items-center gap-4" aria-label={`${name} skill with ${years} experience`}>
      <Image
        src={imagePath}
        alt={`${name} logo`}
        width={96}
        height={96}
        className="h-12 w-12 object-contain md:h-20 md:w-20"
      />
      <div>
        <span className="text-lg font-bold md:text-2xl" aria-label="years of experience">
          {years}
        </span>
      </div>
    </article>
  )
}
