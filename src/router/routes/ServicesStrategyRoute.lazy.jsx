import { createLazyRoute } from '@tanstack/react-router'
import ServicesStrategyPage from '@/pages/services/ServicesStrategyPage'

export const Route = createLazyRoute('/services/strategy')({
  component: ServicesStrategyPage,
})
