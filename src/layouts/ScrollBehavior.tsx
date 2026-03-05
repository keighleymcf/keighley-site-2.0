import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ROUTES, SECTION_IDS } from '@/routes/routes'

export function ScrollBehavior() {
  const location = useLocation()

  useEffect(() => {
    const sectionId = SECTION_IDS[location.pathname as keyof typeof SECTION_IDS]

    if (location.pathname === ROUTES.HOME) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (!sectionId) return

    const timeout = setTimeout(() => {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)

    return () => clearTimeout(timeout)
  }, [location.pathname])

  return null
}
