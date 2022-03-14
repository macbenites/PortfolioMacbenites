import { faGithub, faLinkedin, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const projects = [
  {
    id: 1,
    title: 'Sejuega App',
    image: 'https://res.cloudinary.com/djqkj0inf/image/upload/v1646965670/Portfolio%20/sejuega_ejywch.png',
    description: 'Sejuega es una aplicación donde diferentes usuarios pueden unirse o crear partidos de fútbol, ​​además de poder tener una conversación a través de un chat realizado con Firebase.',
    technologies: ['React.js', 'Redux', 'Node.js', 'Express.js', 'PosgreSql', 'Styled-Components', 'Firebase'],
    repository: 'https://github.com/macbenites/pg-frontend',
    link: 'https://www.sejuega.me/',
  },
  {
    id: 2,
    title: 'Countries App',
    image: 'https://res.cloudinary.com/djqkj0inf/image/upload/v1646965677/Portfolio%20/countries_zmreik.png',
    description:
      'Countries App es un SPA (aplicación de una sola página) con el temática países. Consume datos de una api externa a través de un Back-End desarrollado con Node.js y Express.js. Algunas funcionalidades son: Búsqueda de países, filtrados y ordenados por nombre y ubicación, creación de actividades turísticas.',
    technologies: ['React.js', 'Redux', 'Node.js', 'Express.js', 'PosgreSql', 'Styled-Components'],
    repository: 'https://github.com/macbenites/PI-Countries-main',
    link: 'https://countriesapplication.vercel.app/',
  },
  {
    id: 3,
    title: 'Weather App',
    image: 'https://res.cloudinary.com/djqkj0inf/image/upload/v1646965679/Portfolio%20/weather_w7fzdb.png',
    description:
      'Weather App es un SPA meteorológico (aplicación de una sola página) que proporciona información meteorológica en tiempo real de la ciudad buscada. Fue desarrollado usando React.js, Styled-components.',
    technologies: ['React.js', 'Styled-Components', 'API'],
    repository: 'https://github.com/macbenites/macWeather',
    link: 'https://macweather.netlify.app/',
  },
];

export const skills = [
  { src: '/image/react.svg', alt: 'React', title: 'React.js' },
  { src: '/image/javascript.svg', alt: 'javascript', title: 'JavaScript' },
  { id: 1, src: '/image/nodejs.svg', alt: 'node.js', title: 'Node.js' },
  { id: 2, src: '/image/html.svg', alt: 'Html', title: 'Html 5' },
  { id: 3, src: '/image/css.svg', alt: 'css', title: 'CSS' },
  { id: 4, src: '/image/sequelize.svg', alt: 'Sequelize', title: 'Sequelize' },
  { id: 5, src: '/image/postgresql.svg', alt: 'PostgresSql', title: 'Postgresql' },
  { id: 6, src: '/image/figma.svg', alt: 'Figma', title: 'Figma' },
  { id: 7, src: '/image/redux.svg', alt: 'Redux', title: 'Redux' },
  { id: 8, src: '/image/python.svg', alt: 'Python', title: 'Python' },
  { id: 9, src: '/image/c.svg', alt: 'C++', title: 'C++' },
  { id: 10, src: '/image/java.svg', alt: 'Java', title: 'Java' },
  { id: 11, src: '/image/linux.svg', alt: 'Linux', title: 'Linux' },
  { id: 12, src: '/image/mysql.svg', alt: 'MysqSql', title: 'MySql' },
];

export const socialMedia = [
  { id: 1, icon: faGithub, link: 'https://github.com/macbenites' },
  { id: 2, icon: faLinkedin, link: 'https://www.linkedin.com/in/marlonacostafullstack/' },
  { id: 3, icon: faInstagram, link: 'https://www.instagram.com/marlonacostab/' },
  { id: 4, icon: faWhatsapp, link: 'https://wa.link/i8tvm9' },
];
