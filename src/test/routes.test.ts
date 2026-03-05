import { describe, it, expect } from 'vitest'
import { ROUTES, SECTION_IDS } from '@/routes/routes'

describe('ROUTES', () => {
  it('defines all expected routes', () => {
    expect(ROUTES.HOME).toBe('/')
    expect(ROUTES.ABOUT).toBe('/about')
    expect(ROUTES.WORK).toBe('/work')
    expect(ROUTES.AWARDS).toBe('/awards')
    expect(ROUTES.CONTACT).toBe('/contact')
    expect(ROUTES.PRIVACY).toBe('/privacy')
  })
})

describe('SECTION_IDS', () => {
  it('maps all section routes to correct DOM IDs', () => {
    expect(SECTION_IDS[ROUTES.HOME]).toBe('hero')
    expect(SECTION_IDS[ROUTES.ABOUT]).toBe('about')
    expect(SECTION_IDS[ROUTES.WORK]).toBe('work')
    expect(SECTION_IDS[ROUTES.AWARDS]).toBe('awards')
    expect(SECTION_IDS[ROUTES.CONTACT]).toBe('contact')
  })

  it('does not include the privacy route', () => {
    expect(SECTION_IDS).not.toHaveProperty(ROUTES.PRIVACY)
  })
})
