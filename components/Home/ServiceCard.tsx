'use client'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { StaticImageData } from 'next/image'

import { fadeIn } from '@/utils/motion'

interface Service {
	index: number
	title: string
	icon: StaticImageData
}

const ServiceCard = ({ index, title, icon }: Service) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-full xs:w-[250px]"
    >
      <Tilt
        scale={1}
        transitionSpeed={1000}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly"
        >
          <Image
            width={64}
            height={64}
            src={icon}
            alt="Service Icon"
            className="object-contain"
          />
					
          <h3 className="text-white text-[20px] text-center font-bold">{title}</h3>
        </div>
      </Tilt>
    </motion.div>
  )
}

export default ServiceCard
