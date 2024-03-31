import {
  Hero,
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
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Hero />
      </div>
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
