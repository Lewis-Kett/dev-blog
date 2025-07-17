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
    <Card key={name}>
      <CardHeader>
        <HeroImage />
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription className="text-black">{`${title} at ${company}`}</CardDescription>
      </CardHeader>
      <CardContent className="pb-16">
        <p className="text-muted-foreground text-lg">&quot;{comments}&quot;</p>
      </CardContent>
    </Card>
  )
}

export { FeedbackCard }
