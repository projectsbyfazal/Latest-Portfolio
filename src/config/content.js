/**
 * content.js — every piece of editable site text/data lives here.
 * Swap strings, add/remove array items, or point image fields at your own
 * files in `src/assets/images/` — components never hardcode copy.
 */

import aiFeatureImg from '../assets/images/ai-labs.png';
import safetyAppImg from '../assets/images/safety-app.png';
import youtubeImg from '../assets/images/youtube.png';
import translationImg from '../assets/images/translation.png';
import dictionaryImg from '../assets/images/dictionary.png';
import weatherImg from '../assets/images/weather.png';
import notesImg from '../assets/images/notes.png';
import galleryImg from '../assets/images/gallery.png';
import codeEditorImg from '../assets/images/code-editor.png';
import qrCodesImg from '../assets/images/qr-codes.png';
import mathMasterImg from '../assets/images/math-master.png';
import addonImg from '../assets/images/addon.png';
import propusersImg from '../assets/images/propusers.png';
import plan4aiImg from '../assets/images/plan4ai.png';
import drivingImg from '../assets/images/driving.png';
import rhcareImg from '../assets/images/rhcare.png';
import finsweetImg from '../assets/images/finsweet.png';
import mccoyImg from '../assets/images/mccoy.png';
import businessImg from '../assets/images/business.png';
import educationalImg from '../assets/images/educational.png';
import hospitalImg from '../assets/images/hospital.png';
import peacockImg from '../assets/images/peacock.png';

/**
 * Computes total years of experience since `startDate`, rounded DOWN to the
 * nearest 0.5 — e.g. 3.67 years -> 3.5, 3.0 years -> 3. Keeps the "1+",
 * "1.5+" style instead of odd values like 3.3 or 3.4.
 */
function calculateYearsExperience(startDate = new Date(2023, 5, 1)) {
  const now = new Date();
  const totalMonths =
    (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
  const years = totalMonths / 12;
  return Math.floor(years * 2) / 2;
}

const yearsExperience = calculateYearsExperience();
const yearsExperienceDecimals = yearsExperience % 1 === 0 ? 0 : 1;

export const site = {
  name: 'Yasir Khan',
  role: 'Frontend Engineer',
  tagline: 'Turning ideas into responsive, high-performing web experiences.',
  email: 'yasirkhan8104@gmail.com',
  phone: '+91 9313911094',
  whatsapp: 'Say Hello on WhatsApp',
  location: 'Vadodara, India',
  resumeUrl: '/resume.pdf',
  yearsExperience,
  projectsCompleted: 20,
  rating: 5,
};

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yasir-fazal-khan-783a62252/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/projectsbyfazal', icon: 'github' },
  { label: 'Instagram', href: 'https://www.instagram.com/yasirkhan_92/', icon: 'instagram' },
  { label: 'WhatsApp', href: 'https://wa.me/919313911094', icon: 'whatsapp' },
];

export const about = {
  heading: 'Why work with me',
  body:
    "I've worked on 20+ projects, including marketing sites, dashboards, and web applications. I understand how to turn design into performant, well-structured products — communicating clearly, hitting deadlines, and sweating the small details.",
  stats: [
    { label: 'Years experience', value: yearsExperience, suffix: '+', decimals: yearsExperienceDecimals },
    { label: 'Projects completed', value: 20, suffix: '+', decimals: 0 },
    { label: 'Technologies used', value: 10, suffix: '+', decimals: 0 },
    { label: 'Companies worked', value: 2, suffix: '', decimals: 0 },
  ],
};

export const services = [
  {
    title: 'Static/Dynamic Websites',
    description:
      'I build static and dynamic websites with modern designs and interactive features. These sites support responsive layouts, forms, user interactions, real-time content, and API integrations, making them suitable for portfolios, blogs, business platforms, and custom web applications.',
    icon: 'globe',
  },
  {
    title: 'Dashboards & CMS',
    description:
      'I develop easy-to-use dashboards and content management systems with clean UI. These dashboards help manage data, users, and content efficiently, while keeping the interface simple and intuitive.',
    icon: 'layout-dashboard',
  },
  {
    title: 'Mobile Applications',
    description:
      'I design and build modern mobile applications with a strong focus on UI and user experience. The apps are responsive, smooth, and optimized for different screen sizes, ensuring consistent performance and usability across devices.',
    icon: 'smartphone',
  },
];

export const skillTags = [
  'Responsive Web Design',
  'Frontend Libraries',
  'Component-Based Architecture',
  'Reusable UI Components',
  'Package Manager (npm/yarn)',
  'State Management',
  'RESTful API Integration',
  'Authentication (JWT / OAuth)',
  'Source Code Organization',
  'Cross-Browser Compatibility',
  'Performance Optimization',
  'Version Control',
];

/** icon keys map to react-icons/si components in TechMarquee.jsx */
export const techStack = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Redux', icon: 'redux' },
  { name: 'Bootstrap', icon: 'bootstrap' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'npm', icon: 'npm' },
  { name: 'GitHub', icon: 'github' },
  { name: 'HTML5', icon: 'html5' },
  { name: 'CSS3', icon: 'css3' },
  { name: 'JavaScript', icon: 'javascript' },
];

export const experience = [
  {
    company: 'Pavans Group.',
    location: 'Vadodara',
    role: 'Frontend Developer — Full Time',
    period: 'June 2026 — Present',
    description:
      'Working on modern and responsive web applications using JavaScript and Various Frontend technologies. Exploring new technologies and improving frontend skills by learning and trying different tools during free time.',
    stack: ['React JS', 'Next.js', 'Laravel', 'Codeigniter', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'Redux Toolkit', 'Zustand'],
  },
  {
    company: 'Zithas Technologies.',
    location: 'Vadodara',
    role: 'Frontend Developer — Full Time',
    period: 'June 2023 — May 2026',
    description:
      'Built responsive websites and web applications using React and JavaScript. Worked on clean UI, reusable components, API integration, and interactive features for different projects.',
    stack: ['React JS', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'Redux Toolkit'],
  },
];

export const projectFilters = ['All', 'Websites', 'Fun Projects', 'Dashboards'];

export const projects = [
  {
    title: 'AI Feature Lab',
    description:
      '',
    tags: ['Fun Projects'],
    image: aiFeatureImg,
    gradient: ['#8b5cf6', '#4c1d95'],
    href: 'https://fazalai.netlify.app/',
  },
  {
    title: 'SafeCircle - Track your peoples',
    description:
      '',
    tags: ['Fun Projects'],
    image: safetyAppImg,
    gradient: ['#ef4444', '#991b1b'],
    href: 'https://my-safe-family.netlify.app/',
  },
  {
    title: 'YouTube Clone App',
    description:
      'A YouTube-inspired video platform with a familiar layout for browsing videos, categories, channels, and video content.',
    tags: ['Fun Projects'],
    image: youtubeImg,
    gradient: ['#ef4444', '#991b1b'],
    href: 'https://fazal-youtube-clone.netlify.app/',
  },
  {
    title: 'Translation App',
    description:
      'A simple translation application that converts text from one language to another using an API.',
    tags: ['Fun Projects'],
    image: translationImg,
    gradient: ['#0ea5e9', '#10b981'],
    href: 'https://projectsbyfazal.github.io/translationapp/',
  },
  {
    title: 'Dictionary App',
    description:
      'A simple dictionary application for searching word meanings, pronunciation, examples, and related information.',
    tags: ['Fun Projects'],
    image: dictionaryImg,
    gradient: ['#ec4899', '#a21caf'],
    href: 'https://projectsbyfazal.github.io/dictionaryapp/',
  },
  {
    title: 'Weather App',
    description:
      'A weather application that shows current weather information such as temperature, humidity, wind speed, and pressure.',
    tags: ['Fun Projects'],
    image: weatherImg,
    gradient: ['#8b5cf6', '#4c1d95'],
    href: 'https://projectsbyfazal.github.io/weatherapp/',
  },
  {
    title: 'Note Taking App',
    description:
      'A simple note-taking application for creating, editing, and managing personal notes and daily tasks.',
    tags: ['Fun Projects'],
    image: notesImg,
    gradient: ['#f97316', '#c2410c'],
    href: 'https://projectsbyfazal.github.io/notesapp/',
  },
  {
    title: 'Dynamic Image Gallery',
    description:
      'A dynamic image gallery with search functionality that displays images based on the selected search term.',
    tags: ['Fun Projects'],
    image: galleryImg,
    gradient: ['#78716c', '#292524'],
    href: 'https://fazal-galary.netlify.app/',
  },
  {
    title: 'Basic Code Editor',
    description:
      'A simple browser-based code editor for writing HTML, CSS, and JavaScript and viewing the output directly.',
    tags: ['Fun Projects'],
    image: codeEditorImg,
    gradient: ['#57534e', '#292524'],
    href: 'https://basic-code-editor.netlify.app/',
  },
  {
    title: 'QR Code Generator',
    description:
      'A simple QR code generator that creates QR codes from user-provided text or information.',
    tags: ['Fun Projects'],
    image: qrCodesImg,
    gradient: ['#f43f5e', '#be123c'],
    href: 'https://projectsbyfazal.github.io/qrcodegeneratorapp/',
  },
  {
    title: 'Math Master — Marketing Website',
    description: '',
    tags: ['Websites'],
    image: mathMasterImg,
    gradient: ['#0ea5e9', '#0369a1'],
    href: 'https://www.bemathmaster.com/',
  },
  {
    title: 'Addon Techno — Solutions',
    description:
      'A business website designed for a security and surveillance solutions provider, presenting their services, products, and industry expertise with a modern and professional interface.',
    tags: ['Websites'],
    image: addonImg,
    gradient: ['#7c3aed', '#c026d3'],
    href: 'https://addontechno.com/',
  },
  {
    title: 'Precision Driving School',
    description:
      'A driving school website providing information about driving courses, training programs, and contact details.',
    tags: ['Websites'],
    image: drivingImg,
    gradient: ['#059669', '#047857'],
    href: 'https://www.precisiondriving.uk/',
  },
  {
    title: 'Propusers — Real Estate',
    description:
      'A real estate website with property listings, search options, filters, and detailed property information for users.',
    tags: ['Websites'],
    image: propusersImg,
    gradient: ['#0ea5e9', '#0369a1'],
    href: 'https://www.propusers.com/',
  },
  {
    title: 'Plan4AI — Consulting',
    description:
      'A consulting website focused on AI-driven supply chain solutions, services, and business information with a modern interface.',
    tags: ['Websites'],
    image: plan4aiImg,
    gradient: ['#16a34a', '#166534'],
    href: 'https://www.plan4ai.com/',
  },
  {
    title: 'Finsweet Clone',
    description:
      '',
    tags: ['Websites'],
    image: finsweetImg,
    gradient: ['#8b5cf6', '#4c1d95'],
    href: 'https://fintweet.netlify.app/',
  },
  {
    title: 'RHCare Support',
    description:
      'A healthcare support website providing information about autism care services, support programs, and the organization.',
    tags: ['Websites'],
    image: rhcareImg,
    gradient: ['#14b8a6', '#0f766e'],
    href: 'https://ztpl.net/rhcare/',
  },
  {
    title: 'Mccoy USA',
    description:
      'A corporate website showcasing the company, its products, services, and 60 years of experience in the industry.',
    tags: ['Websites'],
    image: mccoyImg,
    gradient: ['#dc2626', '#7f1d1d'],
    href: 'https://www.mccoy-usa.com/',
  },
  {
    title: 'Peacock Accountants Limited',
    description:
      'A professional accounting business website with information about services, company details, and contact options.',
    tags: ['Dashboards'],
    image: peacockImg,
    gradient: ['#16a34a', '#166534'],
    href: 'https://demobms.peacockac.com/',
  },
];

export const contact = {
  heading: 'Have an awesome project idea?',
  highlight: "Let's discuss.",
  body: "Tell me a bit about it and I'll get back to you within a day.",
};

export const footer = {
  blurb:
    'Looking for a frontend developer to bring your ideas to life? Get in touch and let’s make something meaningful.',
  copyright: `© ${new Date().getFullYear()} ${site.name}. All rights reserved.`,
};
