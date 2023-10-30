'use client'

import { Suspense, useRef, useState, type FC } from 'react'
import { usePathname } from 'next/navigation'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import type { Mesh } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

type MeshComponentProps = {
  shouldRotate: boolean
}

const MeshComponent: FC<MeshComponentProps> = ({ shouldRotate }) => {
  const fileUrl = '/models/keyboardModelMinified/scene.gltf'
  const mesh = useRef<Mesh>(null)
  const gltf = useLoader(GLTFLoader, fileUrl)

  useFrame(() => {
    if (mesh.current && shouldRotate) {
      mesh.current.rotation.y += 0.003
    }
  })

  return (
    <mesh ref={mesh}>
      <primitive
        object={gltf.scene}
        scale={2}
        position={[3, 0, 0]}
        rotation={[0.9, 0, 0]}
      />
    </mesh>
  )
}

export const Keyboard: FC = () => {
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
            <Suspense fallback={null}>
              <MeshComponent shouldRotate={shouldRotate} />
            </Suspense>
          </Canvas>
        </div>
      )}
    </>
  )
}
