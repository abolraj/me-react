import { createRoute, Outlet } from '@tanstack/react-router'
import { Route as RootRoute } from './RootRoute' // Import the root route
import MainLayout from '@/layouts/MainLayout'

export const MainLayoutRoute = createRoute({
    getParentRoute: () => RootRoute, // This route is a child of the root
    id: '__main_layout_',
    component: () => (
        <MainLayout>
            <Outlet /> {/* This is where child routes will be rendered */}
        </MainLayout>
    ),
})