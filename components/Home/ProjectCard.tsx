'use client'
import Image from 'next/image'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { StaticImageData } from 'next/image'

import { github } from '@/public/images'
import { fadeIn } from '@/utils/motion'

interface ProjectTag {
	name: string
	color: string
}

interface Project {
	index: number
	name: string
	description: string
	image: StaticImageData
	tags: ProjectTag[]
	source_code_link: string
}

const ProjectCard = ({ index, name, description, image, tags, source_code_link }: Project) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.5 * index, 0.75)}
    >
      <Tilt
        scale={1}
        transitionSpeed={1000}
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]"
      >
        <div
          className="relative w-full h-[200px]"
        >
         	<Image
           	src={image}
           	width={320}
           	height={200}
            // eslint-disable-next-line
            alt="Project img"
           	className="w-full h-full object-cover rounded-2xl"
         	/>
					
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <Link
              href={source_code_link}
              target="_blank"
              className="black-gradient w-10 h-10 rounded-full flex items-center justify-center"
            >
              <Image
                src={github}
                alt="Project's github"
                className="w-1/2 h-1/2 object-contain"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
					
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
					
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p
              key={index}
              className={`text-[14px] ${tag.color}`}
            >
								#{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

export default ProjectCard
