import React from 'react'
import { motion } from 'framer-motion'

interface FadeAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeAnimation: React.FC<FadeAnimationProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

export default FadeAnimation
