'use client'
import { Html, useProgress } from '@react-three/drei'

interface CanvasLoaderProps {
	isVisibleLoader: boolean
}

const CanvasLoader = ({ isVisibleLoader = true }: CanvasLoaderProps) => {
  const { progress } = useProgress()
	
  return (
    <Html
      as='div'
      center
      className="flex flex-col items-center justify-center"
    >
      {isVisibleLoader && <span className='canvas-loader'></span>}
			
      <p
        className={`text-[14px] text-[#f1f1f1] font-extrabold ${isVisibleLoader ? 'mt-10' : '' }`}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default CanvasLoader
