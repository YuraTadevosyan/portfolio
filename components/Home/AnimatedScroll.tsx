'use client'
import { motion } from 'framer-motion'

const AnimatedScroll = () => {
  return (
    <motion.div
      animate={{
        y: [10, 34, 10]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop'
      }}
      className="w-3 h-3 rounded-full bg-secondary"
    />
  )
}

export default AnimatedScroll
