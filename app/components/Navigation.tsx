'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/keep-votes', label: 'Keep Votes' },
    { path: '/celebrate', label: 'Celebrate' },
    { path: '/ph-widget', label: 'PH Widget' },
    { path: '/customize-logo', label: 'Customize Logo' },
    { path: '/animated-logo2', label: 'Animated Logo 2' },
    { path: '/animated-logo', label: 'Animated Logo' },
  ]

  return (
    <nav className="bg-black/80 backdrop-blur-sm border-b border-gray-800 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-14">
          <div className="flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
                  pathname === item.path
                    ? 'bg-[#ff6154] text-white shadow-[0_0_10px_rgba(255,97,84,0.3)]'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 