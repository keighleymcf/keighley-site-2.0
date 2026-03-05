export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  WORK: '/work',
  AWARDS: '/awards',
  CONTACT: '/contact',
  PRIVACY: '/privacy',
} as const

export type RouteValue = (typeof ROUTES)[keyof typeof ROUTES]

export const SECTION_IDS = {
  [ROUTES.HOME]: 'hero',
  [ROUTES.ABOUT]: 'about',
  [ROUTES.WORK]: 'work',
  [ROUTES.AWARDS]: 'awards',
  [ROUTES.CONTACT]: 'contact',
} as const satisfies Partial<Record<RouteValue, string>>
