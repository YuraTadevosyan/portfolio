import { Stars } from '@/components'

export default function NotFound() {
  return (
    <div className="h-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-5">404</h1>
        <h2 className="text-4xl font-bold">Not Found</h2>
      </div>
			
      <div className="z-0">
        <Stars />
      </div>
    </div>
  )
}
