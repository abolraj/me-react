import { createLazyRoute } from '@tanstack/react-router'
import HomePage from '@/pages/HomePage'

export const Route = createLazyRoute('/')({
  component: HomePage,
})
