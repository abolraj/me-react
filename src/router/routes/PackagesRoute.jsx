import { createRoute } from '@tanstack/react-router'
import { MainLayoutRoute } from './MainLayoutRoute' // Import the root route

export const PackagesRoute = createRoute({
  getParentRoute: () => MainLayoutRoute, // This route is a child of the root
  path: '/services/packages',
}).lazy(() => import('./PackagesRoute.lazy').then((d) => d.Route))