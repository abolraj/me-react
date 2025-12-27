// src/router/index.js
import { createRouter } from '@tanstack/react-router'
import { Route as RootRoute } from './routes/RootRoute'
import { PortfoliosRoute } from './routes/PortfoliosRoute'
import { ReviewsRoute } from './routes/ReviewsRoute'
import { CertificationsRoute } from './routes/CertificationsRoute'
import { ServicesRoute } from './routes/ServicesRoute'
import { ContactRoute } from './routes/ContactRoute'
import { HomeRoute } from './routes/HomeRoute'

const routeTree = RootRoute.addChildren([
    HomeRoute,
    PortfoliosRoute,
    ReviewsRoute,
    CertificationsRoute,
    ServicesRoute,
    ContactRoute,
])

// We can add another new layout and its routes here
// Every pages does not need to childed with Layout component 
// cause of it handled in render component of the main Router (of that layout)
// 
// const dashboardRouteTree = DashboardRoute.addChildren([
//     HomeRoute,
//     AnaliticsRoute,
//     ...
// ])

export const router = createRouter({
    routeTree,
    scrollRestoration: true,
})