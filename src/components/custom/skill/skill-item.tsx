import Image from 'next/image'
import { type Skill } from '@/content/skills-content'

export function SkillItem({ imagePath, name, years }: Skill) {
  return (
    <article className="flex items-center gap-2 text-sm" aria-label={`${name} skill with ${years} experience`}>
      <Image
        src={imagePath}
        alt={`${name} logo`}
        width={96}
        height={96}
        className="h-24 w-24 object-contain"
      />
      <div>
        <span className="text-2xl">{name}</span>
        <span className="text-2xl" aria-label="years of experience"> - {years}</span>
      </div>
    </article>
  )
}
