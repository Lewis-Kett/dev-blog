import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ContextAwareNavLink, MobileNav } from '@/components/custom/navigation'
import { navigationContent } from '@/content'

export const NavLinks = ({ className }: { className?: string }) => {
  return (
    <>
      {navigationContent.map((item) => (
        <ContextAwareNavLink key={item.id} className={className} href={item.href} isExternal={item.isExternal}>
          {item.label}
        </ContextAwareNavLink>
      ))}
    </>
  )
}

export const Navigation = () => {
  return (
    <header className="w-full px-6 py-8 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-medium text-gray-900 font-sans z-10">
          Lewis Kett
        </Link>
        <div className="hidden md:block">
          <nav className="flex items-center gap-8">
            <NavLinks />
            <Button className='cursor-pointer'>Contact me</Button>
          </nav>
        </div>
        <MobileNav>
          <div className='bg-white'>
            <nav className="flex flex-col items-center justify-center gap-8">
              <NavLinks className="text-2xl" />
              <Button className="w-3/4 text-1xl">Contact me</Button>
            </nav>
          </div>
        </MobileNav>
      </div>
    </header>
  ) 
}
