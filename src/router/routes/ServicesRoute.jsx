import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './RootRoute' // Import the root route

export const ServicesRoute = createRoute({
  getParentRoute: () => RootRoute, // This route is a child of the root
  path: '/services',
}).lazy(() => import('./ServicesRoute.lazy').then((d) => d.Route))