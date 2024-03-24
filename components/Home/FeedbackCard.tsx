'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { fadeIn } from '@/utils/motion'
import { freelance } from '@/public/images'

interface Feedback {
	index: number
	testimonial: string
	name: string
	designation: string
	company: string
}

const FeedbackCard = ({ index, testimonial, name, designation, company }: Feedback) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[400px] w-full'
  >
    {/* eslint-disable-next-line react/no-unescaped-entities */}
    <p className='text-white font-black text-[48px]'>"</p>
		
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px] min-h-[80px]">{testimonial}</p>
			
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
				
        <Image
          width={40}
          height={40}
          src={freelance}
          alt={`feedback_by-${name}`}
          className='rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
)

export default FeedbackCard
