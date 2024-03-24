'use client'
import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { CanvasLoader } from '@/components'

const Computers = () => {
  const isMobile = window.innerWidth <= 768

  const computer = useLoader(GLTFLoader, '/desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight
        intensity={2.5}
        groundColor='black'
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={true}
        shadow-mapSize={1024}
      />
      <pointLight intensity={1}/>
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas
