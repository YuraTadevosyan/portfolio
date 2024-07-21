'use client'
import { useState, useRef, FormEvent, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { SectionWrapper } from '@/hoc'
import { slideIn } from '@/utils/motion'
import { EarthCanvas } from '@/components/canvas'

const Contact = () => {
  const formRef= useRef<HTMLFormElement | null>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState({ type: '', message: ''})
	
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = e
    const { name, value } = target
		
    setForm({
      ...form,
      [name]: value,
    })
  }
	
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
		
		
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_NAME || '',
        {
          from_name: form.name,
          to_name: "Yura Tadevosyan",
          from_email: form.email,
          to_email: process.env.NEXT_PUBLIC_EMAIL_JS_EMAIL_TO,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY || ''
      )
      .then(
        () => {
          setLoading(false)
          setResponse({ type: 'success', message: 'Thanks. I will get back to you ASAP.'})
				
          setForm({
            name: "",
            email: "",
            message: "",
          })
					
          setTimeout(() => {
            setResponse({ type: '', message: ''})
          }, 3500)
        },
        (error) => {
          setLoading(false)
					
          setResponse({ type: 'error', message: 'Ahh, something went wrong. Please try again.'})
					
          setTimeout(() => {
            setResponse({ type: '', message: ''})
          }, 3500)
        }
      )
  }
	
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <h3 className="text-secondary sm:text-[18px] text-[14px] uppercase tracking-wider">Get in touch</h3>
        <p className="order-1 text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
					Contact.
        </p>
				
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label
            htmlFor="name"
            className="flex flex-col"
          >
            <span className="text-white font-medium mb-4">Your Name</span>
						
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="What's Your name?"
              disabled={loading}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-[transparent] font-medium focus:border-[white] transition-all duration-500"
            />
          </label>
					
          <label
            htmlFor="email"
            className="flex flex-col"
          >
            <span className="text-white font-medium mb-4">Your Email</span>
						
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's Your email?"
              disabled={loading}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-[transparent] font-medium focus:border-[white] transition-all duration-500"
            />
          </label>
					
          <label
            htmlFor="message"
            className="flex flex-col"
          >
            <span className="text-white font-medium mb-4">Your Message</span>
						
            <textarea
              id="message"
              name="message"
              rows={7}
              value={form.message}
              onChange={handleChange}
              placeholder="What's do You want to say?"
              disabled={loading}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-[transparent] font-medium focus:border-[white] transition-all duration-500 resize-none"
            />
          </label>
					
          <p className={`${response.message.length ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 min-h-[20px] text-[14px] ${response.type === 'success' ? 'text-green-400' : 'text-red-400' }`}>
            {response.message}
          </p>
					
          <button
            type="submit"
            className="w-fit bg-tertiary py-3 px-8 outline-none text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-secondary transition-colors duration-500"
          >
            {loading ? 'Sending' : 'Send'}
          </button>
        </form>
      </motion.div>
			
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-[780px] md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper({Component: Contact, idName: 'contact'})
