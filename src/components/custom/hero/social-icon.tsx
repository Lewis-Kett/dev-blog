import { Github, Linkedin, XIcon, type LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'

const socialIconVariants = cva(
  [
    'group rounded-full border p-2 transition-colors duration-200 focus:outline-none focus:ring-2',
    'flex items-center justify-center',
  ],
  {
    variants: {
      variant: {
        light:
          'border-gray-200 hover:border-gray-900 hover:bg-gray-900 focus:ring-gray-900 text-gray-600 hover:text-white',
        dark: 'border-neutral-600 hover:border-white hover:bg-neutral-800 focus:ring-white text-neutral-200 hover:text-white',
      },
    },
    defaultVariants: {
      variant: 'dark',
    },
  },
)

type SocialIconProps = {
  href: string
  Icon: LucideIcon
  label: string
  variant?: 'light' | 'dark'
} & VariantProps<typeof socialIconVariants>

export const SocialIcon = ({ href, Icon, label, variant = 'light' }: SocialIconProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={socialIconVariants({ variant })}
      aria-label={label}
      tabIndex={0}
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">{label}</span>
    </Link>
  )
}

export const SocialIconSet = ({ variant }: { variant: SocialIconProps['variant'] }) => {
  return (
    <>
      <SocialIcon variant={variant} href="https://github.com/yourusername" Icon={Github} label="GitHub Profile" />
      <SocialIcon variant={variant} href="https://twitter.com/yourusername" Icon={XIcon} label="Twitter Profile" />
      <SocialIcon
        variant={variant}
        href="https://linkedin.com/in/yourusername"
        Icon={Linkedin}
        label="LinkedIn Profile"
      />
    </>
  )
}
