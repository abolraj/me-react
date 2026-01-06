// src/router/index.js
import { createRouter } from '@tanstack/react-router'
import { Route as RootRoute } from './routes/RootRoute'
import { PortfoliosRoute } from './routes/PortfoliosRoute'
import { ReviewsRoute } from './routes/ReviewsRoute'
import { CertificationsRoute } from './routes/CertificationsRoute'
import { ServicesRoute } from './routes/ServicesRoute'
import { ContactRoute } from './routes/ContactRoute'
import { HomeRoute } from './routes/HomeRoute'
import { MainLayoutRoute } from './routes/MainLayoutRoute'
import { PackagesRoute } from './routes/PackagesRoute'
import { PackageRoute } from './routes/PackageRoute'
import { FeaturesRoute } from './routes/FeaturesRoute'

const routeTree = RootRoute.addChildren([
    MainLayoutRoute.addChildren([
        HomeRoute,
        PortfoliosRoute,
        ReviewsRoute,
        CertificationsRoute,
        ServicesRoute,
        FeaturesRoute,
        PackagesRoute,
        PackageRoute,
        ContactRoute,
    ])
])


export const router = createRouter({
    routeTree,
    notFoundMode: 'root',
    scrollRestoration: true,
})