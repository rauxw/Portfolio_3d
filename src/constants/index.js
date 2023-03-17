import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

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
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Lorem Ipsum',
    company_name: 'Lorem',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ],
  },
  {
    title: 'Lorem Ipsum',
    company_name: 'Lorem',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ],
  },
  {
    title: 'Lorem Ipsum',
    company_name: 'Lorem',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ],
  },
  {
    title: 'Lorem Ipsum',
    company_name: 'Lorem',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
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
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
