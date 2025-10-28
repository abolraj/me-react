import { createLazyRoute } from '@tanstack/react-router'
import PortfoliosPage from '../../pages/PortfoliosPage'

export const Route = createLazyRoute('/portfolios')({
  component: PortfoliosPage,
})
