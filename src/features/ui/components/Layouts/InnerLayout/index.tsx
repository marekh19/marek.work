import { motion } from 'framer-motion'
import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
}

export const InnerLayout: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      {children}
    </motion.div>
  )
}
