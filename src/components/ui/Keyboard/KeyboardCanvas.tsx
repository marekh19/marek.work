import { useState, type Dispatch, type SetStateAction } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { KeyboardModel } from './KeyboardModel'

export const KeyboardCanvas = () => {
  const [shouldRotate, setShouldRotate] = useState(true)

  return (
    <Canvas
      className="size-full"
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
  )
}
