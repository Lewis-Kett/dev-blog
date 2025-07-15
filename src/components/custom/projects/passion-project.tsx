import Link from 'next/link'
import Image from 'next/image'

export const PassionProject = () => {
  return (
    <Link href="./projects/saily" className="group">
      <section className="flex flex-col bg-[#292927] md:flex-row md:items-center">
        <div className="relative h-[500px] w-full overflow-hidden md:order-1 md:basis-1/2">
          <Image
            src="/placeholder-5.jpg"
            alt="Passion project thumbnail"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="px-8 py-12 text-white md:flex md:basis-1/2 md:justify-end md:px-10 lg:px-28">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-medium md:text-5xl">My Passion Project</h1>
            <p className="text-lg">Modernizing the operations, management and CRM for sailing clubs across the UK.</p>
            <div className="text-muted-foreground flex items-center text-sm transition-all duration-300 group-hover:opacity-100 md:opacity-0">
              <span className="font-medium text-white md:text-lg md:font-medium">See the project</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </Link>
  )
}
