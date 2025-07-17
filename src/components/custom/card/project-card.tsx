import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
}

export const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
  return (
    <Link href={link} className="group block w-full">
      <Card className="bg-background overflow-hidden border-0 shadow-none transition-all duration-300">
        <div className="relative aspect-16/9 max-h-[400px] overflow-hidden lg:aspect-square">
          <Image
            src={image}
            alt={`${title} project thumbnail`}
            fill
            className="rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader className="gap-4 px-0">
          <CardTitle className="text-2xl xl:text-3xl font-medium">{title}</CardTitle>
          <CardDescription className="text-black text-lg">{description}</CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          <div className="text-muted-foreground flex items-center text-sm">
            <span className="font-medium text-black">See the project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
