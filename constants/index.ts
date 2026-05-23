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
  liveDox,
  github,
  telegram,
  textComparer,
  articleBuilder,
  euka,
  threeAnimations
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
  {
    testimonial: "Yura was a diligent worker who consistently demonstrated a good work ethic. His proficiency in English was adequate for all required written and spoken tasks. Additionally, he often brought valuable ideas to the table, contributing positively to our team’s dynamic. I only ended the contract due to budget constraints, I wish I didn't have to let him go.",
    name: 'Chad Michael Lawson',
    designation: 'Client',
    company: 'Upwork',
  },
  {
    testimonial: "Yura is an amazing full stack developer that has gone above and beyond to produce great work. He has help build core features and improvements to our marketing platform AI SaaS",
    name: 'Kevin Wang',
    designation: 'Founder',
    company: 'Euka.ai',
  },
]

const projects = [
  {
    name: 'Euka.ai',
    description: "At Euka AI, we've built the intelligent infrastructure that's defining the future of social commerce. Our AI-powered platform helps leading TikTok Shop brands discover, connect with, and manage creator relationships at scale – turning authentic content into measurable sales growth.",
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'ai',
        color: 'pink-text-gradient',
      },
    ],
    image: euka,
    source_code_link: '',
    site_link: 'https://www.euka.ai/',
  },
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
    site_link: '',
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
    site_link: '',
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
    site_link: 'https://rainbow-khapse-ae92c4.netlify.app/',
  },
  {
    name: 'Live Dox',
    description: 'Live Docs is a real-time collaborative document editing platform that allows multiple users to create and edit documents simultaneously, with live updates and seamless synchronization. Perfect for teams needing efficient, collaborative document management.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'shadcn',
        color: 'green-text-gradient',
      },
      {
        name: 'liveblocks',
        color: 'pink-text-gradient',
      },
    ],
    image: liveDox,
    source_code_link: 'https://github.com/YuraTadevosyan/live-docs',
    site_link: 'https://live-docs-eight-rouge.vercel.app/',
  },
  {
    name: 'Text Comparer',
    description: 'TextComparer - A modern, fully client-side text comparison tool built with React 19, TypeScript, Vite, and Tailwind CSS v4. It delivers line-level diffing with similarity scoring, persistent history, performance insights, light/dark themes, and keyboard shortcuts - all wrapped in a polished, animated UI powered by Motion.',
    tags: [
      {
        name: 'stitch',
        color: 'pink-text-gradient',
      },
      {
        name: 'aistudio',
        color: 'green-text-gradient',
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
    ],
    image: textComparer,
    source_code_link: 'https://github.com/YuraTadevosyan/text-comparer',
    site_link: 'https://yuratadevosyan.github.io/text-comparer/',
  },
  {
    name: 'Article Builder',
    description: 'Article Builder - An opinionated long-form editor built with React 19, TypeScript 6, Vite 8, Tailwind v4 and Shadcn UI. Block-based contenteditable surface, live preview, image upload, and an AI assistant that talks to OpenAI or Anthropic from the browser. Five color schemes × light/dark, WCAG AA contrast, and Cypress.',
    tags: [
      {
        name: 'claudedesign',
        color: 'white-text-gradient',
      },
      {
        name: 'claudecode',
        color: 'orange-text-gradient',
      },
      {
        name: 'cypress',
        color: 'green-text-gradient',
      },
    ],
    image: articleBuilder,
    source_code_link: 'https://github.com/YuraTadevosyan/article-builder',
    site_link: 'https://yuratadevosyan.github.io/article-builder/#/dashboard',
  },
  {
    name: 'Three.js & Animations',
    description: 'A small collection of frontend showcases - GSAP-powered motion, Three.js / WebGL scenes, and an audio-reactive visualizer. Each app is its own Vite build, deployed under this domain.',
    tags: [
      {
        name: 'gsap',
        color: 'green-text-gradient',
      },
      {
        name: 'three.js',
        color: 'pink-text-gradient',
      },
      {
        name: 'WebGL',
        color: 'blue-text-gradient',
      },
    ],
    image: threeAnimations,
    source_code_link: 'https://github.com/YuraTadevosyan/three-js-and-animations/',
    site_link: 'https://yuratadevosyan.github.io/three-js-and-animations/',
  },
]

export { services, technologies, experiences, testimonials, projects, socialLinks }
