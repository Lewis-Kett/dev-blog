import { Github, Twitter, Linkedin } from 'lucide-react'
import { HeroImage, SocialIcon } from './index'

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col space-y-6 mx-5">
        <HeroImage />
        <div className="space-y-10">
          <h1 className="lg:text-6xl md:text-5xl text-3xl font-normal leading-tight text-gray-900">
            I&apos;m Lewis Kett, a Software Engineer delivering world class software experiences, based in Manchester,
            UK.
          </h1>
          <p className="text-xl text-muted-foreground">
            I work with businesses to deliver their product vision, work directly with customers and mentor coach.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <SocialIcon href="https://github.com/yourusername" Icon={Github} label="GitHub Profile" />
            <SocialIcon href="https://twitter.com/yourusername" Icon={Twitter} label="Twitter Profile" />
            <SocialIcon href="https://linkedin.com/in/yourusername" Icon={Linkedin} label="LinkedIn Profile" />
          </div>
        </div>
      </div>
    </>
  )
}
