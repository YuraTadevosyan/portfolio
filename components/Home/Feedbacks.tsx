'use client'
import { motion } from 'framer-motion'

import { SectionWrapper } from '@/hoc'
import { FeedbackCard } from '@/components'
import { textVariant } from '@/utils/motion'
import { testimonials } from '@/constants'

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="bg-tertiary rounded-2xl min-h-[300px] sm:px-16 px-6 sm:py-16 py-10">
        <motion.div variants={textVariant(0.5)}>
          <h2 className="text-secondary sm:text-[18px] text-[14px] uppercase tracking-wider">What others say</h2>
          <p className="order-1 text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
						Testimonials.
          </p>
        </motion.div>
      </div>
			
      <div className="-mt-20 pb-14 sm:px-16 px-6 flex flex-wrap gap-7 justify-center">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={index}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper({ Component: Feedbacks, idName: 'feedbacks' })
