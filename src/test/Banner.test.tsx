import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Banner } from '@/components/Banner'
import siteContent from '@/content/site.json'

describe('Banner', () => {
  it('renders the banner text from content', () => {
    render(<Banner />)
    expect(screen.getByText(siteContent.banner)).toBeInTheDocument()
  })
})
