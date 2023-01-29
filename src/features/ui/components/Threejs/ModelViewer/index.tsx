import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import type { FC } from 'react'

import { GltfModel } from '../Model'
import type { GltfProps } from '../types/GltfProps'

export const ModelViewer: FC<GltfProps> = ({
  modelPath,
  scale = 40,
  position = [0, 0, 0],
  rotation = [45, 0, 0],
}) => {
  return (
    <Canvas>
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel
          modelPath={modelPath}
          scale={scale}
          position={position}
          rotation={rotation}
        />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}
