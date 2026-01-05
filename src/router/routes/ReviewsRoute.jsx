import { createRoute } from '@tanstack/react-router'
import { MainLayoutRoute } from './MainLayoutRoute' // Import the root route

export const ReviewsRoute = createRoute({
  getParentRoute: () => MainLayoutRoute, // This route is a child of the root
  path: '/reviews',
}).lazy(() => import('./ReviewsRoute.lazy').then((d) => d.Route))