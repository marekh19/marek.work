'use client'

import { useRef, type FC } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import type { Mesh } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

type Props = {
  shouldRotate: boolean
}

export const KeyboardModel: FC<Props> = ({ shouldRotate }) => {
  const fileUrl = '/models/keyboardModel/scene.gltf'
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
