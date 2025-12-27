import App from '@/App'
import Loading from '@/components/Loading'
import MainLayout from '@/layouts/MainLayout'
import E404 from '@/pages/errors/E404'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <App>
      <MainLayout>
        <Outlet /> {/* This is where child routes will be rendered */}
      </MainLayout>
    </App>
  ),
  notFoundComponent: () => (
    <App>
      <E404 /> {/* This is where child routes will be rendered */}
    </App>
  ),
  pendingComponent: Loading,
  defaultPendingMinMs: 5000,
})