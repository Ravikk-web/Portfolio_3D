import{
  web,
  mobile,
  backend,
  creator,
  microsoft,
  accenture,
  amazon,
  meta,
  javascript,
  androidstudio,
  html,
  css,
  reactjs,
  php,
  tailwind,
  nodejs,
  mongodb,
  git,
  blender,
  docker,
  threejs,
  bitc,
  bazar,
  swiftexit,
} from '../assets'


export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Projects",
      title: "Projects",
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
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];

  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Microsoft",
      icon: microsoft,
      iconBg: "#FFFFFF",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Android Developer",
      company_name: "Accenture",
      icon: accenture,
      iconBg: "#000000",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining android applications using android Studios and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Amazon",
      icon: amazon,
      iconBg: "#FFFFE6",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

  //Known ++technologies
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
      name: "Android",
      icon: androidstudio,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "PHP",
      icon: php,
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
      name: "Blender",
      icon: blender,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  //Works
  const projects = [
    {
      name: "BIT-Chat",
      description:
        "A Crypto Web-based platform that allows users intract/ chat from various people, providing a convenient and efficient solution for communication needs.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: bitc,
      source_code_link: "https://github.com/",
    },
    {
      name: "3D Bazar",
      description:
        "The project is an e-commerce web portal which has an online interface in a form of a e-commerce website that will allow users to buy, sell or view the 3d assets",
      tags: [
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
      ],
      image: bazar,
      source_code_link: "https://github.com/Ravikk-web/3d-bazar",
    },
    {
      name: "Swift Exit",
      description:
        "A comprehensive app using QR authentication to manage the exit-pass of college students by reducing the paper work through automation pfgenerating gate pass process.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "android-studio",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
      ],
      image: swiftexit,
      source_code_link: "https://github.com/Ravikk-web/Gate-Pass-App_QR/tree/master",
    },
  ];

  export {services, experiences, technologies, projects, };
  