'use client'
import { motion } from 'framer-motion'

import { SectionWrapper } from '@/hoc'
import { ServiceCard } from '@/components'
import { services } from '@/constants'
import { fadeIn, textVariant } from '@/utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <h2 className="text-secondary sm:text-[18px] text-[14px] uppercase tracking-wider">Introduction</h2>
        <p className="order-1 text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</p>
      </motion.div>
			
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px] max-w-3xl"
      >
				I specialize in HTML, CSS, and JavaScript, and I have a deep understanding of modern frameworks like React and Vue.js. I strive to write clean, maintainable code while keeping up with the latest industry trends and best practices. I strive to build responsive and interactive web and mobile applications.
      </motion.p>
			
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={index}
              index={index}
              {...service}
            />
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper({ Component: About, idName: 'about'})
