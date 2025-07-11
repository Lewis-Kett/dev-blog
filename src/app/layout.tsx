import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/custom/navigation'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'LKett.dev',
  description: "Lewis Kett's personal website & software development blog",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="antialiased font-sans">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
