import Image from 'next/image'
import { type Experience } from '@/content/experience-content'

export function ExperienceItem({ title, dateRange, company, imagePath, descriptions }: Experience) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <Image
          src={imagePath}
          alt={`${company} logo`}
          width={64}
          height={64}
          className="aspect-square rounded-lg object-contain"
        />
      </div>
      <div className="flex-grow">
        <div className="mb-2">
          <p className="text-2xl">{dateRange}</p>
          <h3 className="text-2xl font-medium">{title}</h3>
        </div>
        <div className="space-y-2 text-lg">
          <ul className="list-inside list-disc space-y-4">
            {descriptions.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
