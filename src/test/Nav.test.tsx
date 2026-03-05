import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { Nav } from '@/components/Nav'
import siteContent from '@/content/site.json'

function renderWithRouter(ui: React.ReactElement, { route = '/' } = {}) {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>)
}

describe('Nav', () => {
  it('renders all nav links from content', () => {
    renderWithRouter(<Nav />)
    for (const link of siteContent.nav.links) {
      expect(screen.getByText(link.label)).toBeInTheDocument()
    }
  })

  it('renders the logo', () => {
    renderWithRouter(<Nav />)
    expect(screen.getByText(siteContent.nav.logo)).toBeInTheDocument()
  })

  it('highlights the active nav link', () => {
    renderWithRouter(<Nav />, { route: '/about' })
    const aboutLink = screen.getByText('About')
    expect(aboutLink).toHaveClass('text-coral')
  })
})
