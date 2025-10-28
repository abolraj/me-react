import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './RootRoute' // Import the root route

export const HomeRoute = createRoute({
  getParentRoute: () => RootRoute, // This route is a child of the root
  path: '/',
}).lazy(() => import('./HomeRoute.lazy').then((d) => d.Route))