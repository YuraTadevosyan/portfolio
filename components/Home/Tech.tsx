'use client'
import { motion } from 'framer-motion'

import { SectionWrapper } from '@/hoc'
import { BallCanvas } from '@/components/canvas'
import { technologies } from '@/constants'
import { textVariant } from "@/utils/motion"

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <h2 className="text-secondary sm:text-[18px] text-[14px] uppercase tracking-wider">What I know</h2>
        <p className="order-1 text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
					Used Technologies.
        </p>
      </motion.div>
			
			
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology, index) => (
          <div
            className="w-28 h-28"
            key={index}
          >
            <BallCanvas icon={technology.icon}/>
						
            <p className="text-[12px] font-bold text-center my-3">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper({Component: Tech, idName: 'tech'})
