'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { SectionWrapper } from '@/hoc'
import { ProjectCard } from '@/components'
import { textVariant, fadeIn } from '@/utils/motion'
import { projects } from '@/constants'

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <h2 className="text-secondary sm:text-[18px] text-[14px] uppercase tracking-wider">My work</h2>
        <p className="order-1 text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
					Projects.
        </p>
      </motion.div>
			
      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl"
        >
					I have worked on several exciting projects as a front-end developer, utilizing a variety of JavaScript libraries and frameworks.
					Throughout these projects, I emphasized clean code architecture, efficient UI/UX design, and seamless integration with backend services to deliver high-quality web applications.
        </motion.p>
      </div>
			
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            {...project}
          />
        ))}
      </div>
			
      <motion.div
        variants={textVariant(0.5)}
        className="mt-7 flex items-center justify-center text-xl font-bold"
      >
        <Link
          target="_blank"
          href="https://github.com/YuraTadevosyan"
          className="text-secondary transition-colors duration-500 hover:text-white"
        >
					See more on my GitHub
        </Link>
      </motion.div>
    </>
  )
}

export default SectionWrapper({Component: Works, idName: 'works'})
