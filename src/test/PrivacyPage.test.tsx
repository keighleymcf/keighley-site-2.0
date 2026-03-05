import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { PrivacyPage } from '@/pages/PrivacyPage'
import privacyContent from '@/content/privacy.json'
import { ROUTES } from '@/routes/routes'

function renderWithRouter(ui: React.ReactElement, { route = ROUTES.PRIVACY } = {}) {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>)
}

describe('PrivacyPage', () => {
  it('renders the heading and last updated text from content', () => {
    renderWithRouter(<PrivacyPage />)

    expect(
      screen.getByRole('heading', { level: 1, name: privacyContent.heading }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Last updated:/i)).toBeInTheDocument()
    expect(screen.getByText(privacyContent.lastUpdated)).toBeInTheDocument()
  })

  it('renders all privacy sections from content', () => {
    renderWithRouter(<PrivacyPage />)

    for (const section of privacyContent.sections) {
      expect(screen.getByRole('heading', { level: 2, name: section.heading })).toBeInTheDocument()
      expect(screen.getByText(section.body)).toBeInTheDocument()
    }
  })

  it('renders a back link to home from content', () => {
    renderWithRouter(<PrivacyPage />)

    const backLink = screen.getByRole('link', { name: privacyContent.backLabel })
    expect(backLink).toBeInTheDocument()
    expect(backLink.getAttribute('href')).toBe(ROUTES.HOME)
  })
})

