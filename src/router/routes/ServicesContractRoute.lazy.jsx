import { createLazyRoute } from '@tanstack/react-router'
import ContractPage from '@/pages/services/ContractPage'

export const Route = createLazyRoute('/services/contract/$itemSlug')({
  component: ContractPage,
})
