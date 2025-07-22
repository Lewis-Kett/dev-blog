import { ProjectCard } from '@/components/custom/card'
import { ConnectSection } from '@/components/custom/connect'
import { selectedProjectsContent } from '@/content/project-card-content'

interface Project {
  title: string
  description: string
  image: string
  link: string
}

export default function ProjectsPage() {
  return (
    <main>
      <div className="mx-auto px-5 py-12 lg:max-w-4/5 xl:max-w-2/3">
        <div className="mb-12 lg:mb-16 lg:pt-14">
          <h1 className="mb-4 text-4xl font-medium md:text-6xl">Selected projects</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Selected projects showcasing thoughtful design solutions in education, fitness, and social networking
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {selectedProjectsContent.map((project: Project, index: number) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              variant="compact"
            />
          ))}
        </div>
      </div>
      <ConnectSection />
    </main>
  )
}
