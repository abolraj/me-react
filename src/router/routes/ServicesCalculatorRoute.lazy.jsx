import { createLazyRoute } from '@tanstack/react-router'
import CalculatorPage from '@/pages/services/CalculatorPage'

export const Route = createLazyRoute('/services/calculator/$itemSlug')({
  component: CalculatorPage,
})
