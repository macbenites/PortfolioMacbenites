import Image from 'next/image';
import TimeLine from '@components/TimeLine';
import { skills } from '../../public/data/projects';

export default function AboutUsPage() {
  return (
    <div>
      <section className="py-16 md:py-32">
        <div className="flex flex-col-reverse md:flex-row" data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
          <div className="md:w-8/12 flex flex-col justify-between gap-7">
            <h1 className="text-6xl font-sans break-words font-semibold text-gradient dark:text-gradient-dark antialiased aos-init aos-animate">Sobre mí.</h1>
            <p className="text-base font-sans text-gray-500 mt-8 md:max-w-md ">
              Soy un desarrollador Full Stack Web Developer nacido en Perú. Apasionado por crear aplicaciones web y móviles que sean amigables y fáciles de usar. Creativo, curioso y disfruto mucho
              aprendiendo cosas nuevas cada día, lo que hace que el mundo de la tecnología sea lo que más me guste.
            </p>
            <a
              href="/files/MarlonAcosta_CV.pdf"
              className="w-full sm:w-48 text-md bg-black dark:hover:bg-gray-300 hover:bg-neutral-900 dark:bg-white dark:text-black text-white font-normal py-4 px-8 rounded-md transition-colors text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver resumen
            </a>
          </div>
          <div className="md:pl-8 md:mt-0 mx-auto md:w-6/12">
            <Image src={'/image/me.jpg'} alt="Mi picture" className="object-contain rounded-xl" width="600" height="600" />
          </div>
        </div>
      </section>
      <Skills />
      <TimeLine />
    </div>
  );
}

const IconAbout = ({ src, alt, title }) => {
  return (
    <div className="text-center p-4 rounded-lg bg-white shadow-2xl dark:bg-transparent dark:border dark:border-gray-700 dark:border-solid w-24">
      <Image src={src} width="40" height="40" alt={alt} />
      <p className="text-gray-500 text-sm font-light">{title}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-16 md:py-32">
      <h1 className="text-6xl font-sans break-words font-semibold text-gradient dark:text-gradient-dark text-center">Habilidades Técnicas.</h1>
      <div className="flex flex-wrap gap-2 mt-10 justify-center" data-aos="fade-up">
        {skills.map((skill) => (
          <IconAbout key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
};
