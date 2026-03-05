import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { ROUTES, type RouteValue } from '@/routes/routes'

const sectionRoutes = (Object.values(ROUTES) as RouteValue[])
  .filter((path) => path !== ROUTES.PRIVACY)
  .map((path) => ({ path, element: <MainLayout /> }))

export const router = createBrowserRouter([
  ...sectionRoutes,
  { path: ROUTES.PRIVACY, element: <PrivacyPage /> },
])
