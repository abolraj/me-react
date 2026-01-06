import { createLazyRoute } from '@tanstack/react-router'
import PackagesPage from '@/pages/services/PackagesPage'

export const Route = createLazyRoute('/services/packages')({
  component: PackagesPage,
})
