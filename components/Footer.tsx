import Link from 'next/link'
import Image from 'next/image'

import { socialLinks } from '@/constants'

const Footer = () => {
  return (
    <nav className="w-full flex items-center bg-primary py-5 sm:px-16 px-6">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <div
          className="flex items-center gap-2"
        >
          <Image
            priority
            alt="Logo Image"
            src="/logo.png"
            width={36}
            height={36}
            className="w-auto h-auto object-contain"
          />
        </div>
				
        <ul className="list-none flex gap-10">
          {socialLinks.map((socialLink, index) => {
            return (
              <li
                key={index}
                className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center border-2 border-[transparent] hover:border-white transition-all duration-500"
              >
                <Link
                  href={socialLink.url}
                  target="_blank"
                >
                  <Image
                    alt={socialLink.name}
                    src={socialLink.icon}
                    width={32}
                    height={32}
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Footer
