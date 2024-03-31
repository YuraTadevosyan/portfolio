'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { navLinks } from '@/constants'

const Navbar = () => {
  const path = usePathname()
	
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
	
  return (
    <nav className="w-full flex items-center fixed top-0 z-20 bg-primary py-5 sm:px-16 px-6">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          passHref
          className="flex items-center gap-2"
          onClick={() => setActive('')}
        >
          <Image
            priority
            alt="Logo Image"
            src="/logo.png"
            width={36}
            height={36}
            className="w-auto h-auto object-contain"
          />
					
          <p className="text-white text-[18px] font-bold cursor-pointer">Yura Tadevosyan</p>
        </Link>
				
        <ul
          className={`list-none hidden ${path === '/' ? 'sm:flex' : 'sm:hidden'} flex-row gap-10`}
        >
          {navLinks.map((navLink) => {
            return (
              <li
                key={navLink.id}
                className={`${active === navLink.id ? 'text-white' : 'text-secondary'} font-bold transition-colors duration-500 hover:text-white`}
              >
                <Link
                  href={`#${navLink.id}`}
                  onClick={() => setActive(navLink.id)}
                >
                  {navLink.title}
                </Link>
              </li>
            )
          })}
        </ul>
				
        <div
          className={`sm:hidden ${path === '/' ? 'flex' : 'hidden'} flex-1 items-center justify-end`}
        >
          <Image
            width={28}
            height={28}
            src={toggle ? "/images/close.svg" : "/images/menu.svg"}
            alt="Burger Icon"
            className="object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
					
          <div className={`${!toggle ? 'opacity-0' : 'opacity-100'} flex p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition-all duration-500`}>
            <ul className="list-none flex flex-col items-start justify-end gap-4">
              {navLinks.map((navLink) => {
                return (
                  <li
                    key={navLink.id}
                    className={`${active === navLink.id ? 'text-white' : 'text-secondary'} font-medium cursor-pointer font-poppins text-[16px]`}
                  >
                    <Link
                      href={`#${navLink.id}`}
                      onClick={() => {
                        setActive(navLink.id)
                        setToggle(!toggle)
                      }}
                    >
                      {navLink.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
