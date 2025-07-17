import { ProjectCard } from '@/components/custom/card'
import { projectCardContent } from '@/content'

export const Projects = () => {
  return (
    <div className="mx-auto flex flex-col space-y-6 px-5 py-16 lg:max-w-4/5 lg:pb-40 xl:max-w-2/3">
      <h2 className="text-3xl lg:text-5xl">Previous Projects</h2>
      <p className="lg:text-xl">
        Explore my previous projects and see how I&apos;ve helped businesses and individuals achieve their goals.
      </p>
      <div className="flex flex-col md:flex-row md:gap-8">
        {projectCardContent.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
