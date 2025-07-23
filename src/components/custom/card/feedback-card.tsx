import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { HeroImage } from '../hero'

interface FeedbackCardProps {
  name: string
  title: string
  company: string
  comments: string
}

const FeedbackCard = ({ name, title, company, comments }: FeedbackCardProps) => {
  return (
    <Card key={name} className="p-10 pb-16 min-h-full">
      <CardHeader className="p-0">
        <HeroImage
          src="/lewis.webp"
          alt="Lewis Kett profile picture"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          size='small'
          className="grayscale filter"
        />
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription className="text-md text-black">{`${title} at ${company}`}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-muted-foreground text-lg">&quot;{comments}&quot;</p>
      </CardContent>
    </Card>
  )
}

export { FeedbackCard }
