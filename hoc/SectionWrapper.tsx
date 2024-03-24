'use client'
import { JSX } from 'react'
import { motion } from 'framer-motion'

import { staggerContainer } from '@/utils/motion'

interface ISectionWrapper {
	Component: () => JSX.Element
	idName: string
}

const SectionWrapper = ({ Component, idName }: ISectionWrapper) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="section-wrapper"
      >
        <span
          className='hash-span'
          id={idName}
        >
          &nbsp;
        </span>
				
        <Component />
      </motion.section>
    )
  }

export default SectionWrapper
