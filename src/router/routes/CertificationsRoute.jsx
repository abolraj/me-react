import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './RootRoute' // Import the root route

export const CertificationsRoute = createRoute({
  getParentRoute: () => RootRoute, // This route is a child of the root
  path: '/certifications',
}).lazy(() => import('./CertificationsRoute.lazy').then((d) => d.Route))
