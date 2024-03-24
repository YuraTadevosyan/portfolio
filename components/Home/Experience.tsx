'use client'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


import { ExperienceCard } from '@/components'
import { SectionWrapper} from '@/hoc'
import { textVariant} from '@/utils/motion'
import { experiences } from '@/constants'

import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })
	
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <h2 className="text-secondary sm:text-[18px] text-[14px] uppercase tracking-wider">What I have done so far</h2>
        <p className="order-1 text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
					Work Experience.
        </p>
      </motion.div>
			
      <div
        ref={ref}
        className="mt-10 flex flex-col"
      >
        <VerticalTimeline
          animate={true}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              visible={inView}
              {...experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper({Component: Experience, idName: 'experience'})
