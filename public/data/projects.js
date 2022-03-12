import { faGithub, faLinkedin, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const projects = [
  {
    title: '< Sejuega App />',
    image: 'https://res.cloudinary.com/djqkj0inf/image/upload/v1646965670/Portfolio%20/sejuega_ejywch.png',
    description: 'Sejuega is an application where different users can join or create football matches, in addition to having a conversation through a chat made with Firebase.',
    technologies: ['React.js', 'Redux', 'Node.js', 'Express.js', 'PosgreSql', 'Styled-Components', 'Firebase'],
    repository: 'https://github.com/macbenites/pg-frontend',
    link: 'https://www.sejuega.me/',
  },
  {
    title: '< Countries App />',
    image: 'https://res.cloudinary.com/djqkj0inf/image/upload/v1646965677/Portfolio%20/countries_zmreik.png',
    description:
      'Countries App is a SPA (Single Page Application) with the theme of Countries. Consume data from an external api restcountries through a Back-End developed with Node.js and Express. Some features are: Search countries, filtered and sorted by name and location, creation of tourist activities.',
    technologies: ['React.js', 'Redux', 'Node.js', 'Express.js', 'PosgreSql', 'Styled-Components'],
    repository: 'https://github.com/macbenites/PI-Countries-main',
    link: 'https://countriesapplication.vercel.app/',
  },
  {
    title: '< Weather App />',
    image: 'https://res.cloudinary.com/djqkj0inf/image/upload/v1646965679/Portfolio%20/weather_w7fzdb.png',
    description: 'Weather App is a meteorological SPA (Single Page Application) that provides real-time weather information of the searched city. It was developed using React.js, Styled-components.',
    technologies: ['React.js', 'Styled-Components', 'API'],
    repository: 'https://github.com/macbenites/macWeather',
    link: 'https://macweather.netlify.app/',
  },
];

export const skills = [
  { src: '/image/react.svg', alt: 'React', title: 'React.js' },
  { src: '/image/javascript.svg', alt: 'javascript', title: 'JavaScript' },
  { src: '/image/nodejs.svg', alt: 'node.js', title: 'Node.js' },
  { src: '/image/html.svg', alt: 'Html', title: 'Html 5' },
  { src: '/image/css.svg', alt: 'css', title: 'CSS' },
  { src: '/image/sequelize.svg', alt: 'Sequelize', title: 'Sequelize' },
  { src: '/image/postgresql.svg', alt: 'PostgresSql', title: 'Postgresql' },
  { src: '/image/figma.svg', alt: 'Figma', title: 'Figma' },
  { src: '/image/redux.svg', alt: 'Redux', title: 'Redux' },
  { src: '/image/python.svg', alt: 'Python', title: 'Python' },
  { src: '/image/c.svg', alt: 'C++', title: 'C++' },
  { src: '/image/java.svg', alt: 'Java', title: 'Java' },
  { src: '/image/linux.svg', alt: 'Linux', title: 'Linux' },
  { src: '/image/mysql.svg', alt: 'MysqSql', title: 'MySql' },
];

export const socialMedia = [
  { icon: faGithub, link: 'https://github.com/macbenites' },
  { icon: faLinkedin, link: 'https://www.linkedin.com/in/marlonacostafullstack/' },
  { icon: faInstagram, link: 'https://www.instagram.com/marlonacostab/' },
  { icon: faWhatsapp, link: 'https://wa.link/i8tvm9' },
];
