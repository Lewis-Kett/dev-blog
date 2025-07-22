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
          <h1 className="mb-8 text-4xl leading-tight font-medium md:text-6xl">Graduation Behind. Dedication Ahead.</h1>
          <p className="mb-8 text-2xl leading-relaxed">
            Senior Software Engineer with 10+ years of commercial experience in web development. Specializing in React,
            TypeScript, and Node.js with a proven track record of delivering high-performance web applications and
            design systems for major brands.
          </p>
          <Button variant="outline">Download Resume as PDF</Button>
        </div>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-4xl font-medium">Skills</h2>
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {skillsContent.map((skill, index) => (
                <SkillItem
                  key={index}
                  imagePath={skill.imagePath}
                  name={skill.name}
                  years={skill.years}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-4xl font-medium">Experience</h2>
          <div className="space-y-8">
            {experienceContent.map((experience, index) => (
              <ExperienceItem
                key={index}
                title={experience.title}
                dateRange={experience.dateRange}
                company={experience.company}
                descriptions={experience.descriptions}
                subRole={experience.subRole}
              />
            ))}
          </div>
        </section>
      </div>
      <ConnectSection />
    </main>
  )
}
