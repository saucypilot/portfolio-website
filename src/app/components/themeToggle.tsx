'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Only trust the theme once mounted to avoid a "light" flash
  const isDark =
    mounted && ((theme === 'dark') || (theme === 'system' && resolvedTheme === 'dark'))

  const toggle = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <button
      id="themeToggle"
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      aria-pressed={isDark ? true : false}
      data-mounted={mounted}
    >
      {!isDark && <span className="tt-label tt-left">Light</span>}
      <span className={`tt-knob ${isDark ? 'tt-left' : 'tt-right'}`} aria-hidden="true" />
      {isDark && <span className="tt-label tt-right">Dark</span>}
    </button>
  )
}
