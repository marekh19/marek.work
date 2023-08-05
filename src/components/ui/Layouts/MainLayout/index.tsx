'use client'

import type { FC, ReactNode } from 'react'

import type { Router } from 'next/router'

import { AnimatePresence, motion } from 'framer-motion'

import { Footer } from '@ui/Footer'
import { Header } from '@ui/Header'
import { ModelViewer } from '@ui/Threejs/ModelViewer'

type Props = {
  children: ReactNode
  router: Router
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
}

export const Layout: FC<Props> = ({ children, router }) => {
  const projectDetailPagePattern = /\/projects\/[\w-]+/giu
  const isProjectDetailPage = projectDetailPagePattern.test(router.route)

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col">
      <Header />

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

      <main className="mx-auto w-full grow px-4 sm:px-6">{children}</main>
      <Footer />
    </div>
  )
}
