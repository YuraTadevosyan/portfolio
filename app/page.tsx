import {
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  Stars,
} from '@/components'

export default function Home() {
  return (
    <>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
			
      <div className="relative z-0">
        <Contact />
        <Stars />
      </div>
    </>
  )
}
