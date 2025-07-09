import Link from 'next/link'

export const MainNavigation = () => {
  return (
    <header className="w-full px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-medium text-gray-900 font-sans">
            Lewis Kett
          </Link>
        </div>
      </div>
    </header>
  )
}
