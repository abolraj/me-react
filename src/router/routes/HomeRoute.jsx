import { createRoute } from '@tanstack/react-router'
import { MainLayoutRoute } from './MainLayoutRoute' // Import the root route

export const HomeRoute = createRoute({
  getParentRoute: () => MainLayoutRoute, // This route is a child of the root
  path: '/',
}).lazy(() => import('./HomeRoute.lazy').then((d) => d.Route))