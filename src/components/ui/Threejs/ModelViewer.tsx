'use client'

import { Suspense } from 'react'
import type { FC } from 'react'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import type { GltfProps } from '@/types/threejs'

import { GltfModel } from './Model'

export const ModelViewer: FC<GltfProps> = ({
  modelPath,
  scale = 40,
  position = [0, 0, 0],
  rotation = [45, 0, 0],
}) => {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <GltfModel modelPath={modelPath} scale={scale} position={position} rotation={rotation} />
        <OrbitControls />
      </Canvas>
    </Suspense>
  )
}
