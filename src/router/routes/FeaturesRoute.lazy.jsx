import { createLazyRoute } from '@tanstack/react-router'
import FeaturesPage from '@/pages/services/FeaturesPage'

export const Route = createLazyRoute('/services/packages/$packageSlug')({
  component: FeaturesPage,
})
