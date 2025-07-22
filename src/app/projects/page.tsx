import { ProjectCard } from '@/components/custom/card'
import { selectedProjectsContent } from '@/content/project-card-content'

interface Project {
  title: string
  description: string
  image: string
  link: string
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-medium mb-4">Selected projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Selected projects showcasing thoughtful design solutions in education, fitness, and social networking
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
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
    </main>
  )
}