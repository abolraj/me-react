import { createRoute } from '@tanstack/react-router'
import { MainLayoutRoute } from './MainLayoutRoute' // Import the root route

export const PortfoliosRoute = createRoute({
  getParentRoute: () => MainLayoutRoute, // This route is a child of the root
  path: '/portfolios',
}).lazy(() => import('./PortfoliosRoute.lazy').then((d) => d.Route))