import { createLazyRoute } from '@tanstack/react-router'
import ContactPage from '@/pages/ContactPage'

export const Route = createLazyRoute('/contacts')({
  component: ContactPage,
})
