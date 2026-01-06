import { createLazyRoute } from '@tanstack/react-router'
import PackagePage from '@/pages/services/PackagePage'

export const Route = createLazyRoute('/services/packages/$packageSlug')({
  component: PackagePage,
})
