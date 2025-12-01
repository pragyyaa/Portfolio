import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light'|'dark'>(() => {
    try {
      return (localStorage.getItem('theme') as 'light'|'dark') || 'dark'
    } catch { return 'dark' }
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
      className="px-2 py-1 rounded bg-neutral-800 text-sm"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}
