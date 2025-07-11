'use client'

import { useState, type ReactNode } from 'react'
import { Button } from '@/components/ui/button'

interface MobileNavProps {
  children: ReactNode
}

const MobileNav = ({ children }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden z-10">
      <Button
        variant="ghost"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={handleToggle}
        className="md:hidden flex flex-col items-end gap-2 p-2"
      >
        <span
          className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ease-in-out ${
            isOpen ? 'transform rotate-45 translate-y-[2px]' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-gray-900 transition-all duration-300 ease-in-out ${
            isOpen ? 'transform -rotate-45 translate-y-[-8px] w-6' : ''
          }`}
        />
      </Button>

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-0 bg-white px-6 pb-6 pt-16 border-b border-gray-100 transition-all duration-200 ease-in ${
          isOpen ? 'visible opacity-100 translate-y-[100px]' : 'invisible opacity-0 -translate-y-4'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default MobileNav
