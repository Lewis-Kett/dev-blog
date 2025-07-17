import { FeedbackCard } from '../card'
import { feedbackCarouselContent } from '@/content'

const FeedbackCarousel = () => {
  return (
    <section>
      <div className="px-5 pt-24 pb-12">
        <h1 className="text-3xl md:text-5xl">Expert Feedback</h1>
        <p className="text-lg">
          Read insights and praises from mentors and peers who have guided and witnessed my professional growth.
        </p>
      </div>
      {feedbackCarouselContent.map(({ name, title, company, comments }) => (
        <FeedbackCard key={name} name={name} title={title} company={company} comments={comments} />
      ))}
    </section>
  )
}

export { FeedbackCarousel }
