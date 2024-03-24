'use client'
import { Suspense } from 'react'
import { TextureLoader } from 'three'
import { Canvas, useLoader } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload } from '@react-three/drei'

import { CanvasLoader } from '@/components'

const Ball = ({ imgUrl }) => {
  const decal = useLoader(TextureLoader, imgUrl.src)

  return (
    <Float
      speed={0.05}
      rotationIntensity={0.05}
      floatIntensity={1}
    >
      <ambientLight
        intensity={0.25}
      />

      <directionalLight
        position={[0, 0, 0.05]}
        intensity={1}
      />

      <mesh
        castShadow={true}
        receiveShadow={true}
        scale={2.75}
      >
        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial
          color="#fff"
          polygonOffset={true}
          polygonOffsetFactor={-5}
          flatShading={true}
        />

        <Decal
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          position={[0, 0, 1]}
          flatShading={true}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader isVisibleLoader={false} />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />

        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas
