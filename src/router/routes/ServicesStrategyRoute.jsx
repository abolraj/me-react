import { createRoute } from '@tanstack/react-router'
import { MainLayoutRoute } from './MainLayoutRoute' // Import the root route

export const ServicesStrategyRoute = createRoute({
  getParentRoute: () => MainLayoutRoute, // This route is a child of the root
  path: '/services/strategy',
}).lazy(() => import('./ServicesStrategyRoute.lazy').then((d) => d.Route))