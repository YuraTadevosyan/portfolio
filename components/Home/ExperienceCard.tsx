'use client'
import Image from 'next/image'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { StaticImageData } from 'next/image'

interface Experience {
	visible: boolean
	title: string
	date: string
	company_name: string
	icon: StaticImageData
	iconBg: string
	points: string[]
}

const ExperienceCard = ({ visible, title, date, company_name, icon, iconBg, points }: Experience) => {
  return (
    <VerticalTimelineElement
      visible={visible}
      contentStyle={{background: '#1d1836', color: '#fff', paddingBottom: '10px'}}
      contentArrowStyle={{borderRight: '7px solid #232631'}}
      date={date}
      iconStyle={{background: iconBg}}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src={icon}
            alt={`Experience of ${company_name}`}
            className="w-[60%] h-[60%] object-contain rounded-full"
            width="24"
            height="24"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {title}
        </h3>
        <p className="text-secondary text-[16px] font-semibold m-0">
          {company_name}
        </p>
      </div>
			
      <ul className='my-3 list-disc ml-5 space-y-2'>
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

export default ExperienceCard
