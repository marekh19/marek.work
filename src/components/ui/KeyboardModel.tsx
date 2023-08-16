'use client'

import { type FC } from 'react'

import { usePathname } from 'next/navigation'

import { AnimatePresence, motion } from 'framer-motion'

import { ModelViewer } from '@/components/ui/Threejs/ModelViewer'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
}

export const KeyboardModel: FC = () => {
  const path = usePathname()
  const projectDetailPagePattern = /\/projects\/[\w-]+/giu
  const isProjectDetailPage = projectDetailPagePattern.test(path)

  return (
    <AnimatePresence>
      {!isProjectDetailPage && (
        <motion.div
          initial="hidden"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: 'easeInOut' }}
          style={{ position: 'relative' }}
          className="relative m-auto my-[-8rem] h-[26rem] w-full sm:h-[36rem]"
        >
          <ModelViewer
            modelPath="/keyboard.glb"
            position={[0, 0, 0]}
            scale={14}
            rotation={[0.9, 0, 0]}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
