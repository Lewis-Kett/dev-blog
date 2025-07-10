import { type LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface SocialIconProps {
  href: string
  Icon: LucideIcon
  label: string
}

export const SocialIcon = ({ href, Icon, label }: SocialIconProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full border border-gray-200 transition-colors duration-200 hover:bg-gray-900 hover:border-gray-900 group"
    >
      <Icon className="w-5 h-5 text-gray-600 group-hover:text-white" />
      <span className="sr-only">{label}</span>
    </Link>
  )
}
