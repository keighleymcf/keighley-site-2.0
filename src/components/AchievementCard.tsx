import { useRef, useCallback, useState } from 'react'
import { Heading, Caption, Body, Small } from '@/components/Typography'

type Props = {
  title: string
  subtitle: string
  description: string
  color: string
  index: number
}

export function AchievementCard({ title, subtitle, description, index }: Props) {
  const popoverRef = useRef<HTMLDivElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!popoverRef.current) return
    popoverRef.current.style.left = `${e.clientX}px`
    popoverRef.current.style.top = `${e.clientY + 20}px`
  }, [])

  const handleClick = useCallback(() => {
    setMobileOpen((prev) => !prev)
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setMobileOpen((prev) => !prev)
    }
  }, [])

  return (
    <article
      role="button"
      tabIndex={0}
      aria-expanded={mobileOpen}
      className="group relative flex-none cursor-default min-h-[220px] flex flex-col justify-end"
      onMouseMove={onMouseMove}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <Small className="mb-2">{String(index + 1).padStart(2, '0')}</Small>
      <Heading level={3} className="text-4xl md:text-5xl max-w-[220px] md:max-w-[320px] select-none leading-[0.9]">
        {title}
      </Heading>

      {/* Mouse-following hover card (desktop) */}
      <div
        ref={popoverRef}
        className="pointer-events-none fixed z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-[280px] rounded-xl bg-yellow px-5 py-4 shadow-lg hidden md:block"
      >
        <Caption className="text-black font-semibold mb-1">{subtitle}</Caption>
        <Body className="text-sm leading-relaxed text-black/70">{description}</Body>
      </div>

      {/* Click-to-show card (mobile) - overlaid, offset right and bottom */}
      {mobileOpen && (
        <div className="absolute -bottom-6 left-3 z-10 w-[220px] rounded-xl bg-yellow px-4 py-3 md:hidden">
          <Caption className="text-black font-semibold mb-1">{subtitle}</Caption>
          <Body className="text-sm leading-relaxed text-black/70">{description}</Body>
        </div>
      )}
    </article>
  )
}
