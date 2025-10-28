import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './RootRoute' // Import the root route

export const ReviewsRoute = createRoute({
  getParentRoute: () => RootRoute, // This route is a child of the root
  path: '/reviews',
}).lazy(() => import('./ReviewsRoute.lazy').then((d) => d.Route))