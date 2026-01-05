import { createRoute } from '@tanstack/react-router'
import { MainLayoutRoute } from './MainLayoutRoute' // Import the root route

export const CertificationsRoute = createRoute({
  getParentRoute: () => MainLayoutRoute, // This route is a child of the root
  path: '/certifications',
}).lazy(() => import('./CertificationsRoute.lazy').then((d) => d.Route))
