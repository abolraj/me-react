import { createRoute } from '@tanstack/react-router'
import { MainLayoutRoute } from './MainLayoutRoute' // Import the root route

export const PackageRoute = createRoute({
  getParentRoute: () => MainLayoutRoute, // This route is a child of the root
  path: '/services/packages/$packageSlug',
}).lazy(() => import('./PackageRoute.lazy').then((d) => d.Route))