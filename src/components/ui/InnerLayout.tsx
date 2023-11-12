'use client'

import type { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
}

export const InnerLayout: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      className="relative mx-auto h-full w-full max-w-screen-lg px-6 sm:px-8"
    >
      {children}
    </motion.div>
  )
}
