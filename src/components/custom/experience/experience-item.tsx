import Image from 'next/image'
import { type Experience } from '@/content/experience-content'

export function ExperienceItem({ title, dateRange, company, imagePath, descriptions, subRole }: Experience) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <Image
          src={imagePath}
          alt={`${company} logo`}
          width={64}
          height={64}
          className="h-16 w-16 rounded-lg object-contain"
        />
      </div>
      <div className="flex-grow">
        <div className="mb-2">
          <p className="text-muted-foreground text-sm">{dateRange}</p>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <div className="text-muted-foreground space-y-2 text-sm">
          {descriptions.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
          {subRole && (
            <>
              <h4 className="font-medium">{subRole.title}</h4>
              <p>{subRole.description}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}