import { createLazyRoute } from '@tanstack/react-router'
import ServicesPage from '@/pages/ServicesPage'

export const Route = createLazyRoute('/services')({
  component: ServicesPage,
})
