import { createLazyRoute } from '@tanstack/react-router'
import ReviewsPage from '@/pages/ReviewsPage'

export const Route = createLazyRoute('/reviews')({
  component: ReviewsPage,
})
