import { type Experience } from '@/content/experience-content'

export function ExperienceItem({ title, dateRange, company, descriptions, subRole }: Experience) {
  return (
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-muted-foreground mb-2 text-sm">{dateRange}</p>
      <p className="text-muted-foreground mb-3 text-xs">{company}</p>
      <div className="text-muted-foreground space-y-2 text-sm">
        {descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
        {subRole && (
          <>
            <h3 className="font-medium">{subRole.title}</h3>
            <p>{subRole.description}</p>
          </>
        )}
      </div>
    </div>
  )
}