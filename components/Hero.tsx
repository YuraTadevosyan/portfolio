import Link from 'next/link'

import { AnimatedScroll } from '@/components'

import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <span className="w-5 h-5 rounded-full bg-violet" />
          <span className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
				
        <div>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">Hi, I'm <span className="text-violet">Yura</span></h1>
					
          <p
            className="mt-2 text-white-100 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]"
          >
						I dedicated Frontend Developer hailing<br className="hidden sm:block"/> from the picturesque landscapes of
						Armenia 🇦🇲.
          </p>
        </div>
      </div>
			
      <ComputersCanvas />
			
      <div className="absolute z-10 bottom-40 xs:bottom-3 w-full flex items-center justify-center">
        <Link
          href="#about"
          aria-label="Move to About Section"
        >
          <div className="cursor-pointer w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex items-start justify-center">
            <AnimatedScroll />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Hero
