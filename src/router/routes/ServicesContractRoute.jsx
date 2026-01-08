import { createRoute } from '@tanstack/react-router'
import { MainLayoutRoute } from './MainLayoutRoute' // Import the root route

export const ServicesContractRoute = createRoute({
  getParentRoute: () => MainLayoutRoute, // This route is a child of the root
  path: '/services/contract/$itemSlug',
}).lazy(() => import('./ServicesContractRoute.lazy').then((d) => d.Route))