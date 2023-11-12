'use client'

import { useState, type FC } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const KeyboardModel = dynamic(
  () => import('@ui/Keyboard/KeyboardModel').then(model => model.KeyboardModel),
  {
    ssr: false,
    loading: () => null,
  }
)

export const KeyboardCanvas: FC = () => {
  const path = usePathname()
  const isDetailPage = path.includes('projects/') || path.includes('posts/')
  const [shouldRotate, setShouldRotate] = useState(true)

  return (
    <>
      {!isDetailPage && (
        <div className="relative m-auto my-[-8rem] h-[28rem] w-full max-w-screen-lg px-6 sm:h-[36rem] sm:px-8">
          <Canvas
            className="h-full w-full"
            onMouseEnter={() => setShouldRotate(false)}
            onMouseLeave={() => setShouldRotate(true)}
          >
            <OrbitControls />
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={200} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.2}
              penumbra={1}
              intensity={500}
            />
            <KeyboardModel shouldRotate={shouldRotate} />
          </Canvas>
        </div>
      )}
    </>
  )
}
