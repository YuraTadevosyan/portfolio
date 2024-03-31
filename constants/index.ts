import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nuxt,
  next,
  git,
  vue,
  vuex,
  esterox,
  freelance,
  threejs,
  aQuiz,
  aninfo,
  imagePicker,
  github,
  telegram,
} from '@/public/images'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/YuraTadevosyan',
    icon: github,
  },
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/freelancers/~0134a92d367ebe3df8',
    icon: freelance,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/YuraTadevosyan',
    icon: telegram,
  },
]

const services = [
  {
    title: 'JavaScript Developer',
    icon: web,
  },
  {
    title: 'Layout Designer',
    icon: mobile,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Next.js',
    icon: next,
  },
  {
    name: 'Vue JS',
    icon: vue,
  },
  {
    name: 'Vuex',
    icon: vuex,
  },
  {
    name: 'Nuxt.js',
    icon: nuxt,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
]

const experiences = [
  {
    title: 'Front End Developer',
    company_name: 'Esterox LLC',
    icon: esterox,
    iconBg: '#383E56',
    date: 'Jan 2021 - Apr 2023',
    points: [
      'Developing and maintaining web applications using React.js, Vue.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Front End Developer',
    company_name: 'Upwork - Freelance',
    icon: freelance,
    iconBg: '#383E56',
    date: 'Apr 2023 - Now',
    points: [
      'Experience in building single-page (SPAs) and server side rendering (SSRs) applications.',
      'Optimized web applications for performance and cross-browser compatibility.',
      'Collaborated closely with designers and backend developers to deliver high-quality products.',
      'Continuously learned and adapted to emerging technologies and best practices in front-end development.',
    ],
  },
]

const testimonials = [
  {
    testimonial: 'Quick, diligent, knowledgeable. Highly recommend',
    name: 'Martin A Mora III',
    designation: 'Founder',
    company: 'Expertise Inc',
  },
  {
    testimonial: 'Job is well done. Second time working with this person. I recommend working with Yura.',
    name: 'Arman M.',
    designation: 'Client',
    company: 'Upwork',
  },
]

const projects = [
  {
    name: 'a Quiz',
    description: 'A dynamic platform offering engaging quizzes across various categories, competitive leaderboards, and a diverse library of free books. Users can login, test their knowledge, compete with friends, and explore a wide range of literary works, see their result in the leaderboard.',
    tags: [
      {
        name: 'nuxtjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'vue3',
        color: 'green-text-gradient',
      },
      {
        name: 'vuetify',
        color: 'pink-text-gradient',
      },
    ],
    image: aQuiz,
    source_code_link: 'https://github.com/aquizadmin/aQuiz',
    site_link: 'https://github.com/YuraTadevosyan/nuxt-image-picker',
  },
  {
    name: 'aninfo',
    description: 'Our web app provides users with comprehensive anime data accessed through paginated views, ensuring smooth navigation and easy browsing. From episode guides to character profiles, users can explore a vast array of anime information seamlessly.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: aninfo,
    source_code_link: 'https://github.com/YuraTadevosyan/aninfo',
    site_link: 'https://github.com/YuraTadevosyan/nuxt-image-picker',
  },
  {
    name: 'Image Picker',
    description: 'Our convenient image picker tool retrieves high-quality images from Unsplash, Pexels, and Pixabay via simple prompts. Designed for ease of use, it streamlines the process of finding and selecting visuals for various projects, enhancing creativity and productivity with its user-friendly interface.',
    tags: [
      {
        name: 'nuxtjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'unsplash',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: imagePicker,
    source_code_link: 'https://github.com/YuraTadevosyan/nuxt-image-picker',
    site_link: 'https://github.com/YuraTadevosyan/nuxt-image-picker',
  },
]

export { services, technologies, experiences, testimonials, projects, socialLinks }
