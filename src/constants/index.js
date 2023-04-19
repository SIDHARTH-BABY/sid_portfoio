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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN Stack developer Intern",
    company_name: "Brototype",
    icon: starbucks,  
    iconBg: "#383E56",
    date: "June 2022 - February 2023",
    points: [
      "Developing and maintaining web applications using React.js, Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "TechCrista",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "I have gained extensive knowledge and experience working as full stack developer",
      "My colleagues are some of the most talented and supportive individuals I have had the pleasure of working with. Together, we have successfully delivered several challenging projects while maintaining a high standard of work",
      "As a team, we emphasize the importance of collaboration and teamwork.",
      "Working at TechCrista has not only allowed me to develop my technical skills, but has also taught me the importance of effective communication, teamwork, and collaboration.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SocialMedia Website",
    description:
      "Social media platforms allow users to have conversations,share posts.The whole app is split into 5 services namely, Authentication, Profiles, Posts, Chats & Admin.This project is designed and developed with scalability & maintainability in mind.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "orange-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      " https://github.com/SIDHARTH-BABY/SOCIAL-MEDIA-mern-project",
  },
  {
    name: "E-Commerce Website",
    description:
      "Web application that enables users to search for items,payment integrations and order. Implemented all the necessary e-commerce functionalities like product listing, cart, orders, etc.Additional features are Offers and Coupons,Chart & Graph reports on Admin side,Product, user & category Management on Admin side,Payment gateways integrated: Razorpay, PayPal.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SIDHARTH-BABY/E-Commerce-Website",
  },
  {
    name: "REACT MOVIELAND",
    description:
      "Allows users to search for their favorite movies using the Open Movie Database API,Users can search for movies by title. Results are displayed in a responsive grid view.The app is designed to be fully responsive and user interface design, adapting to different screen sizes and devicetypes",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },

      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: " OMDb API,",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/SIDHARTH-BABY/Movie-react-mini-project",
  },
];

export { services, technologies, experiences, testimonials, projects };
