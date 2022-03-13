import Image from 'next/image';
import TimeLine from './TimeLine';
import { skills } from '../../public/data/projects';

export default function AboutUsPage() {
  return (
    <div className="">
      <section className="py-16 md:py-32">
        <div className="flex flex-col-reverse md:flex-row" data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
          <div className="md:w-8/12 flex flex-col justify-between gap-7">
            <h1 className="text-6xl font-sans break-words font-semibold text-gradient dark:text-gradient-dark antialiased aos-init aos-animate">About Me.</h1>
            <p className="text-base font-sans text-gray-500 mt-8 md:max-w-md ">
              Hello! I&apos;m Marlon, a Full Stack Developer based in Lima Perú.
              <br />I enjoy creating beautiful and reliable applications for internet and phones. My goal is to always build scalable products and performant experiences.
            </p>
            <a
              href="/files/MarlonAcosta_CV.pdf"
              className="w-full md:w-48 text-md bg-black hover:bg-neutral-900 dark:bg-white dark:text-black text-white font-normal py-4 px-8 rounded-md transition-colors text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Cv
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
      <h1 className="text-6xl font-sans break-words font-semibold text-gradient dark:text-gradient-dark text-center">Technical Skills.</h1>
      <div className="flex flex-wrap gap-2 mt-10 justify-center" data-aos="fade-up">
        {skills.map((skill) => (
          <IconAbout key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
};
