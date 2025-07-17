import { Github, Linkedin } from 'lucide-react'
import { HeroImage, SocialIcon, XIcon } from '@/components/custom/hero'

export const Hero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex flex-col space-y-6 px-5 py-16 lg:max-w-4/5 xl:max-w-2/3">
        <HeroImage
          src="/lewis.webp"
          alt="Lewis Kett profile picture"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          size='medium'
        />
        <div className="space-y-10">
          <h1 className="text-3xl leading-tight font-normal text-gray-900 md:text-5xl lg:text-6xl xl:max-w-3/4">
            I&apos;m Lewis Kett, a Software Engineer delivering world class software experiences, based in Manchester,
            UK.
          </h1>
          <p className="text-muted-foreground text-xl">
            Using my experience with XP, TDD & Agile methodologies I create performant, maintainable & scalable
            software.
          </p>
          <div className="flex items-center justify-between gap-4 pt-4 md:justify-start">
            <SocialIcon href="https://github.com/yourusername" Icon={Github} label="GitHub Profile" />
            <SocialIcon href="https://twitter.com/yourusername" Icon={XIcon} label="Twitter Profile" />
            <SocialIcon href="https://linkedin.com/in/yourusername" Icon={Linkedin} label="LinkedIn Profile" />
          </div>
        </div>
      </div>
    </section>
  )
}
