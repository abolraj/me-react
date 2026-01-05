import { createRoute } from '@tanstack/react-router'
import { MainLayoutRoute } from './MainLayoutRoute' // Import the root route

export const ServicesRoute = createRoute({
  getParentRoute: () => MainLayoutRoute, // This route is a child of the root
  path: '/services',
}).lazy(() => import('./ServicesRoute.lazy').then((d) => d.Route))