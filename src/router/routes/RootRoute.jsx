import Loading from '@/components/Loading'
import MainLayout from '@/layouts/MainLayout'
import E404 from '@/pages/errors/E404'
import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router'

export const Route = createRootRoute({
  notFoundComponent: E404,
  pendingComponent: Loading,
  defaultPendingMinMs: 5000,
})