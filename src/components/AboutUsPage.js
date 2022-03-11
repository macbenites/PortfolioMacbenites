import Image from 'next/image';
import TimeLine from './TimeLine';
import { skills } from '../../public/data/projects';

export default function AboutUsPage() {
  return (
    <section className="py-16 md:py-32">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-8/12 flex flex-col justify-between">
          <h1 className="text-7xl font-sans break-words font-semibold text-gradient dark:text-gradient-dark antialiased aos-init aos-animate">About Me.</h1>
          <p className="text-base font-sans text-gray-500 mt-8 md:max-w-md ">
            Hello! I&apos;m Junior, a Full Stack Developer based in Lima Perú.
            <br />I enjoy creating beautiful and reliable applications for internet and phones. My goal is to always build scalable products and performant experiences.
          </p>
          <button className="w-full sm:w-28 text-md bg-black hover:bg-neutral-900 dark:bg-white dark:text-black text-white font-normal py-3 px-6 mt-8 rounded-md transition-colors">Resume</button>
        </div>
        <div className="md:pl-8 md:mt-0 mx-auto md:w-6/12">
          <Image src={'/image/me.jpg'} alt="Mi picture" className="object-contain rounded-xl" width="600" height="600" />
        </div>
      </div>
    </section>
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
    <section className="min-h-screen">
      <h1 className="text-7xl font-sans break-words font-semibold text-gradient dark:text-gradient-dark text-center">Skills.</h1>
      <div className="flex flex-wrap gap-2 mt-10 justify-center">
        {skills.map((skill) => (
          <IconAbout key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
};
