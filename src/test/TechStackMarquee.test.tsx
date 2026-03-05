import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TechStackMarquee } from '@/components/sections/TechStackMarquee'
import techContent from '@/content/tech.json'

describe('TechStackMarquee', () => {
  it('renders all tech names', () => {
    render(<TechStackMarquee />)
    for (const item of techContent.items) {
      expect(screen.getAllByText(item.name).length).toBeGreaterThan(0)
    }
  })

  it('renders separator glyphs in the correct color', () => {
    render(<TechStackMarquee />)
    const itemWithSeparator = techContent.items.find((i) => i.separator && i.separatorColor)
    if (!itemWithSeparator?.separator || !itemWithSeparator.separatorColor) return
    const separatorEls = screen.getAllByText(itemWithSeparator.separator)
    expect(separatorEls[0]).toHaveClass(`text-${itemWithSeparator.separatorColor}`)
  })
})
