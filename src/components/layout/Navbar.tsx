import { useState, useEffect } from 'react'
import type { NavLink } from '../../types'
import { Link } from 'react-router-dom'

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-neutral-gray shadow-sm'
        : 'bg-white border-b border-neutral-gray'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-primary p-1.5">
              <span className="material-symbols-outlined text-white text-xl">campaign</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-deep-black uppercase">
              Mebas PR
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link

                key={link.href}
                to={link.href}
                className="text-xs font-bold hover:text-primary transition-colors uppercase tracking-widest text-deep-black"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Search */}
          <div className="flex items-center gap-3">
            <a
              href="#opportunities"
              className="hidden lg:block bg-primary hover:bg-primary-dark text-white px-6 py-2.5 text-xs font-black transition-all uppercase tracking-widest"
            >
              Apply Now
            </a>
            <button className="p-2 hover:bg-neutral-gray transition-colors">
              <span className="material-symbols-outlined text-deep-black">search</span>
            </button>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 hover:bg-neutral-gray transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="material-symbols-outlined">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-gray px-4 pb-6 pt-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                onClick={() => setMenuOpen(false)}
                key={link.href}
                to={link.href}
                className="text-left text-sm font-bold uppercase tracking-widest text-deep-black hover:text-primary transition-colors py-2 border-b border-neutral-gray/50"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#opportunities"
              onClick={() => setMenuOpen(false)}
              className="bg-primary hover:bg-primary-dark text-white py-3 text-xs font-black uppercase tracking-widest mt-2 transition-all"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
