import CertificationPage from '@/pages/CertificationsPage'
import { createLazyRoute } from '@tanstack/react-router'

export const Route = createLazyRoute('/certifications')({
  component: CertificationPage,
})
