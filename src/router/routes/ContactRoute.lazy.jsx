import { createLazyRoute } from '@tanstack/react-router'
import ContactPage from '@/pages/ContactPage'

export const Route = createLazyRoute('/contact')({
  component: ContactPage,
})
