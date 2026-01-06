import { createRoute } from '@tanstack/react-router'
import { MainLayoutRoute } from './MainLayoutRoute' // Import the root route

export const FeaturesRoute = createRoute({
  getParentRoute: () => MainLayoutRoute, // This route is a child of the root
  path: '/services/features',
}).lazy(() => import('./FeaturesRoute.lazy').then((d) => d.Route))