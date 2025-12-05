import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'
import clsx from 'clsx'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  const LinkClass = (isActive: boolean) => clsx('hover:text-accent transition', { 'text-accent': isActive })

  return (
    <header className="glass fixed w-full z-30">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-bold text-xl neon ml-1">Pragya Sood</Link>

        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={({ isActive }) => LinkClass(isActive)}>Home</NavLink>
          <NavLink to="/skills" className={({ isActive }) => LinkClass(isActive)}>Skills</NavLink>
          <NavLink to="/projects" className={({ isActive }) => LinkClass(isActive)}>Projects</NavLink>
          <NavLink to="/about" className={({ isActive }) => LinkClass(isActive)}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => LinkClass(isActive)}>Contact</NavLink>
          <a href="/resume.pdf" className="ml-2 px-3 py-1 bg-primary text-black rounded" download>Resume</a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button aria-label="Toggle menu" className="md:hidden p-2" onClick={() => setOpen(v => !v)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={clsx('md:hidden transition-all', { 'max-h-0 overflow-hidden': !open, 'max-h-screen': open })}>
        <div className="p-4 space-y-2">
          <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => LinkClass(isActive)}>Home</NavLink>
          <NavLink to="/skills" onClick={() => setOpen(false)} className={({ isActive }) => LinkClass(isActive)}>Skills</NavLink>
          <NavLink to="/projects" onClick={() => setOpen(false)} className={({ isActive }) => LinkClass(isActive)}>Projects</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => LinkClass(isActive)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) => LinkClass(isActive)}>Contact</NavLink>
          <a href="/resume.pdf" className="block mt-2 px-3 py-2 bg-primary text-black rounded" download>Download Resume</a>
        </div>
      </div>
    </header>
  )
}
