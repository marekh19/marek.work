import type { FC, ReactNode } from 'react'

import { Footer } from '../../Footer'
import { Header } from '../../Header'
import { ModelViewer } from '../../Threejs/ModelViewer'

type Props = {
  children: ReactNode
}

export const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col">
      <Header />

      <div className="relative m-auto mt-[-8rem] mb-[-10rem] h-[30rem] w-full sm:h-[40rem]">
        <ModelViewer
          modelPath="/keyboard.glb"
          position={[0, 0, 0]}
          scale={15}
          rotation={[45, 0, 0]}
        />
      </div>

      <main className="mx-auto w-full flex-grow px-4 sm:px-6">{children}</main>
      <Footer />
    </div>
  )
}
