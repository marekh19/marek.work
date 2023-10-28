'use client'

import { Suspense, useRef, type FC } from 'react'
import { usePathname } from 'next/navigation'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { AnimatePresence, motion } from 'framer-motion'
import type { Mesh } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const animateVariants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
}

const MeshComponent: FC = () => {
  const fileUrl = '/models/keyboardModel/scene.gltf'
  const mesh = useRef<Mesh>(null)
  const gltf = useLoader(GLTFLoader, fileUrl)

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.003
    }
  })

  return (
    <mesh ref={mesh}>
      <primitive
        object={gltf.scene}
        scale={10}
        position={[0, 0, -1]}
        rotation={[0.9, 0, 0]}
      />
    </mesh>
  )
}

export const Keyboard: FC = () => {
  const path = usePathname()
  const isProjectDetailPage = path.includes('projects/')

  return (
    <AnimatePresence>
      {!isProjectDetailPage && (
        <motion.div
          variants={animateVariants}
          initial="hidden"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, type: 'easeInOut' }}
          className="relative m-auto my-[-8rem] h-[26rem] w-full sm:h-[36rem]"
        >
          <Canvas className="h-full w-full">
            <OrbitControls />
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={200} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.2}
              penumbra={1}
              intensity={500}
            />
            <Suspense fallback={null}>
              <MeshComponent />
            </Suspense>
          </Canvas>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
