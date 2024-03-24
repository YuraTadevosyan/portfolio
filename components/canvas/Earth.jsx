'use client'
import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { CanvasLoader } from '@/components'

const Earth = () => {
  const earth = useLoader(GLTFLoader, '/planet/scene.gltf')

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas
