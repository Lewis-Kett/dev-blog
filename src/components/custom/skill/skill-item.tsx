import Image from 'next/image'
import { type Skill } from '@/content/skills-content'

export function SkillItem({ imagePath, name, years }: Skill) {
  return (
    <article className="flex items-center gap-2 text-sm" aria-label={`${name} skill with ${years} experience`}>
      <Image
        src={imagePath}
        alt={`${name} logo`}
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
      <div>
        <span className="text-xl">{name}</span>
        <span className="text-bold text-xl" aria-label="years of experience"> - {years}</span>
      </div>
    </article>
  )
}
