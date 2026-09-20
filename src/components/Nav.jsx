import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { creativeProjects, technicalProjects, kindLabel } from '../data/projects'
import { useMediaQuery } from '../hooks/useMediaQuery'

const columns = [
  { key: 'creative', items: creativeProjects },
  { key: 'technical', items: technicalProjects },
]

export default function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef(null)
  const { pathname } = useLocation()
  // Pointer devices open the menu on hover, so a click there should only ever
  // confirm it open; touch devices have no hover, so there a tap toggles.
  const canHover = useMediaQuery('(hover: hover)')

  // Any navigation closes everything.
  useEffect(() => {
    setDropdownOpen(false)
    setMobileOpen(false)
    setMobileWorkOpen(false)
  }, [pathname])

  // Escape closes; clicking outside closes the desktop dropdown.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      setDropdownOpen(false)
      setMobileOpen(false)
    }
    const onPointerDown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [])

  // Once the page has moved the bar takes on glass and a shadow — depth,
  // without changing what the bar is.
  useEffect(() => {
    let frame = null
    const measure = () => {
      frame = null
      setScrolled(window.scrollY > 12)
    }
    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  const isWorkPath = pathname.startsWith('/work/')
  // The glass bar only works where there is a dark photograph behind it. Every
  // other route is cream, so white-on-glass would vanish there.
  const overHero = pathname === '/'
  const label = overHero ? 'text-white' : 'text-primary'
  const labelActive = overHero ? 'text-white' : 'text-accent-deep'
  const rule = overHero ? 'border-transparent' : 'border-accent'

  return (
    <header
      className={
        overHero
          ? 'fixed inset-x-0 top-0 z-50'
          : `sticky top-0 z-50 border-b border-accent/40 transition-all duration-300 ${
              scrolled
                ? 'bg-bg/90 shadow-[0_10px_30px_-20px_rgba(43,36,32,0.55)] backdrop-blur-xl'
                : 'bg-bg'
            }`
      }
    >
      <div
        className={`flex h-[4.5rem] items-center justify-between gap-6 md:h-[5.25rem] ${
          overHero ? 'w-full px-6 md:px-10 lg:px-16' : 'mx-auto w-full max-w-6xl px-5 sm:px-8'
        }`}
      >
        <Link
          to="/"
          aria-label="Mohammad Nouman-Ud-din — home"
          className={`flex flex-col justify-center rounded-full bg-primary px-5 py-2 leading-tight transition-colors duration-200 hover:bg-[#5a2e54] sm:px-6 ${
            overHero ? 'sr-only' : ''
          }`}
        >
          <span className="font-serif text-[0.95rem] text-bg md:text-[1.05rem]">
            Mohammad Nouman-Ud-din
          </span>
          <span className="text-[0.55rem] uppercase tracking-[0.22em] text-bg/70 md:text-[0.6rem]">
            AI Creative Technologist
          </span>
        </Link>

        {/* ---------- Desktop ---------- */}
        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          <TopLink to="/" tone={{ label, labelActive, rule }}>
            Home
          </TopLink>

          <Link
            to="/#about"
            className={`border-b-[1.5px] border-transparent pb-1 text-sm tracking-wide transition-colors duration-150 ${label}`}
          >
            About
          </Link>

          <Link
            to="/#background"
            className={`border-b-[1.5px] border-transparent pb-1 text-sm tracking-wide transition-colors duration-150 ${label}`}
          >
            Background
          </Link>

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => canHover && setDropdownOpen(true)}
            onMouseLeave={() => canHover && setDropdownOpen(false)}
          >
            <button
              type="button"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={() => setDropdownOpen((open) => (canHover ? true : !open))}
              className={`flex items-center gap-1.5 border-b-[1.5px] pb-1 text-sm tracking-wide transition-colors duration-150 ${
                isWorkPath ? `${rule} ${labelActive}` : `border-transparent ${label}`
              }`}
            >
              Portfolio
              <ChevronDown
                aria-hidden="true"
                strokeWidth={1.75}
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`absolute right-0 top-full w-[34rem] pt-4 transition duration-200 ease-out ${
                dropdownOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible -translate-y-1 opacity-0'
              }`}
            >
              <div className="grid grid-cols-2 gap-8 rounded-[var(--radius-md)] border border-border bg-surface p-7 shadow-[0_24px_60px_-28px_rgba(43,36,32,0.45)]">
                {columns.map(({ key, items }) => (
                  <div key={key}>
                    <p className="mb-3 border-b border-border pb-2 text-[0.63rem] uppercase tracking-[0.2em] text-accent-deep">
                      {kindLabel[key]}
                    </p>
                    <ul className="space-y-1">
                      {items.map((project) => (
                        <li key={project.slug}>
                          <Link
                            to={`/work/${project.slug}`}
                            tabIndex={dropdownOpen ? 0 : -1}
                            className="block rounded-md px-2 py-1.5 text-sm text-text transition-colors duration-200 hover:bg-bg hover:text-accent-deep"
                          >
                            {project.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <TopLink to="/contact" tone={{ label, labelActive, rule }}>
            Contact
          </TopLink>
        </nav>

        {/* ---------- Mobile trigger ---------- */}
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((open) => !open)}
          className={`-mr-2 p-2 md:hidden ${overHero ? 'text-white' : 'text-primary'}`}
        >
          {mobileOpen ? (
            <X aria-hidden="true" strokeWidth={1.5} className="h-6 w-6" />
          ) : (
            <Menu aria-hidden="true" strokeWidth={1.5} className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* ---------- Mobile panel ---------- */}
      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="border-t border-border bg-bg shadow-[0_18px_40px_-26px_rgba(43,36,32,0.6)] md:hidden"
      >
        <nav aria-label="Main" className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <MobileLink to="/">Home</MobileLink>

          <Link
            to="/#about"
            className="block border-b border-border/70 py-3.5 text-[0.95rem] text-primary"
          >
            About
          </Link>

          <Link
            to="/#background"
            className="block border-b border-border/70 py-3.5 text-[0.95rem] text-primary"
          >
            Background
          </Link>

          <div className="border-b border-border/70">
            <button
              type="button"
              aria-expanded={mobileWorkOpen}
              onClick={() => setMobileWorkOpen((open) => !open)}
              className="flex w-full items-center justify-between py-3.5 text-left text-[0.95rem] text-primary"
            >
              Portfolio
              <ChevronDown
                aria-hidden="true"
                strokeWidth={1.75}
                className={`h-4 w-4 text-accent-deep transition-transform duration-200 ${
                  mobileWorkOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div hidden={!mobileWorkOpen} className="pb-3">
              {columns.map(({ key, items }) => (
                <div key={key} className="mb-3 last:mb-0">
                  <p className="mb-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-accent-deep">
                    {kindLabel[key]}
                  </p>
                  <ul>
                    {items.map((project) => (
                      <li key={project.slug}>
                        <Link
                          to={`/work/${project.slug}`}
                          className="block border-l border-border py-2 pl-3 text-[0.9rem] text-text/85"
                        >
                          {project.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <MobileLink to="/contact">Contact</MobileLink>
        </nav>
      </div>
    </header>
  )
}

function TopLink({ to, children, tone }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `border-b-[1.5px] pb-1 text-sm tracking-wide transition-colors duration-150 ${
          isActive ? `${tone.rule} ${tone.labelActive}` : `border-transparent ${tone.label}`
        }`
      }
    >
      {children}
    </NavLink>
  )
}

function MobileLink({ to, children }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `block border-b border-border/70 py-3.5 text-[0.95rem] ${
          isActive ? 'text-accent-deep' : 'text-primary'
        }`
      }
    >
      {children}
    </NavLink>
  )
}
