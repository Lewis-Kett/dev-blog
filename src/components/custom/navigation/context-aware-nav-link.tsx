'use client'

import { type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ContextAwareNavLinkProps {
  href: string
  children: ReactNode
  isExternal?: boolean
  className?: string
}

const ContextAwareNavLink = ({ href, children, className, isExternal = false }: ContextAwareNavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname?.includes(href)
  const linkClasses = `${isActive ? 'underline' : ''} ${className}`

  if (isExternal) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
        tabIndex={0}
        aria-label={`Visit ${href} (opens in new tab)`}
      >
        {children}
      </Link>
    )
  }

  return (
    <Link href={href} target="_self" prefetch className={linkClasses} tabIndex={0} aria-label={`Navigate to ${href}`}>
      {children}
    </Link>
  )
}

export default ContextAwareNavLink
