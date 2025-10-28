import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './RootRoute' // Import the root route

export const PortfoliosRoute = createRoute({
  getParentRoute: () => RootRoute, // This route is a child of the root
  path: '/portfolios',
}).lazy(() => import('./PortfoliosRoute.lazy').then((d) => d.Route))