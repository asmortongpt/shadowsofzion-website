'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-band-dark border-b border-band-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-metal text-band-red">
              SHADOWS OF ZION
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-band-red transition px-3 py-2">
                HOME
              </Link>
              <Link href="/music" className="text-white hover:text-band-red transition px-3 py-2">
                MUSIC
              </Link>
              <Link href="/about" className="text-white hover:text-band-red transition px-3 py-2">
                ABOUT
              </Link>
              <Link href="/contact" className="text-white hover:text-band-red transition px-3 py-2">
                CONTACT
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-band-red"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-band-red">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-white hover:text-band-red block px-3 py-2">
              HOME
            </Link>
            <Link href="/music" className="text-white hover:text-band-red block px-3 py-2">
              MUSIC
            </Link>
            <Link href="/about" className="text-white hover:text-band-red block px-3 py-2">
              ABOUT
            </Link>
            <Link href="/contact" className="text-white hover:text-band-red block px-3 py-2">
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
