import React from 'react'
import { NavLinks } from '../navigation'
import { SocialIconSet } from '../hero'

export const Footer = () => (
  <footer className="flex w-full flex-col items-center bg-[#232323] px-4 pt-12 pb-8 text-white md:px-10 lg:px-14">
    <div className="mx-auto flex w-full flex-col items-center md:flex-row md:justify-between">
      <div className="flex flex-col md:flex-row md:gap-12">
        <h2 className="mb-8 text-2xl font-bold">Lewis Kett</h2>
        <nav className="mt-1 mb-12 flex flex-col items-center gap-6 md:flex-row">
          <NavLinks className="text-lg text-neutral-400 transition-colors hover:text-white" />
        </nav>
      </div>
      <div className="mb-12 flex items-center justify-center gap-8 md:flex-row">
        <SocialIconSet variant="dark" />
      </div>
    </div>
    <div className="w-full">
      <hr className="mb-8 w-full border-neutral-700" />
      <p className="text-center text-base text-neutral-400">Copyright 2025 by Lewis Kett</p>
    </div>
  </footer>
)

export default Footer
