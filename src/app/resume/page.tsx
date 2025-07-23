import { ConnectSection } from '@/components/custom/connect'
import { Button } from '@/components/ui/button'
import { skillsContent } from '@/content/skills-content'
import { experienceContent } from '@/content/experience-content'
import { SkillItem } from '@/components/custom/skill'
import { ExperienceItem } from '@/components/custom/experience'

export default function ResumePage() {
  return (
    <main>
      <div className="mx-auto px-5 py-12 lg:max-w-4/5 xl:max-w-2/3">
        <div className="mb-12 max-w-4xl lg:mb-16 lg:pt-14">
          <h1 className="mb-8 text-4xl leading-tight font-medium md:text-6xl">Lewis Kett - Senior Software Engineer</h1>
          <p className="mb-8 text-lg leading-relaxed md:text-2xl">
            Senior Software Engineer with 10+ years of commercial experience in web development. Specializing in React,
            TypeScript, and Node.js with a proven track record of delivering high-performance web applications and
            design systems for major brands.
          </p>
          <Button asChild variant="default">
            <a href="/lewis-kett-resume.pdf" download="Lewis-Kett-Resume.pdf">
              Download Resume as PDF
            </a>
          </Button>
        </div>

        <section className="mb-16 md:mb-24">
          <h2 className="mb-6 text-3xl font-medium md:mb-10 md:text-4xl">Skills</h2>
          <div className="mb-4">
            <div className="grid justify-center gap-12 md:grid-cols-2 lg:grid-cols-4">
              {skillsContent.map((skill, index) => (
                <SkillItem key={index} imagePath={skill.imagePath} name={skill.name} years={skill.years} />
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="mb-6 text-4xl font-medium md:mb-10">Experience</h2>
          <div className="space-y-8">
            {experienceContent.map((experience, index) => (
              <ExperienceItem
                key={index}
                title={experience.title}
                dateRange={experience.dateRange}
                company={experience.company}
                imagePath={experience.imagePath}
                descriptions={experience.descriptions}
              />
            ))}
          </div>
        </section>
      </div>
      <ConnectSection />
    </main>
  )
}
