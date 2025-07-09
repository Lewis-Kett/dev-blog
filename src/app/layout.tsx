import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { MainNavigation } from '@/components/ui/main-navigation'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Kett.dev',
  description: "Lewis Kett's personal branding website & software development blog",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="antialiased font-sans">
        <MainNavigation />
        {children}
      </body>
    </html>
  )
}
