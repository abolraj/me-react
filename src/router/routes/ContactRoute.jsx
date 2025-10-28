import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './RootRoute' // Import the root route

export const ContactRoute = createRoute({
  getParentRoute: () => RootRoute, // This route is a child of the root
  path: '/contact',
}).lazy(() => import('./ContactRoute.lazy').then((d) => d.Route))