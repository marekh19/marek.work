'use client'

import { useRef } from 'react'
import type { FC } from 'react'

import { useFrame, useLoader } from '@react-three/fiber'
//@ts-ignore TODO: fix declarations
import keyboard from 'assets/models/keyboard.glb'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import type { GltfProps } from '@/types/threejs'

export const GltfModel: FC<GltfProps> = ({
  scale = 40,
  position = [0, 0, 0],
  rotation = [45, 0, 0],
}) => {
  const ref = useRef<THREE.Object3D>()
  const gltf = useLoader(GLTFLoader, keyboard)

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.003
    }
  })

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  )
}
