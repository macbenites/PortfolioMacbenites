import Blob from '@components/Blob';
import Link from 'next/link';

const HomePage = () => {
  return (
    <section className="py-16 md:py-24" data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
      <div className="relative flex flex-col md:flex-row m-auto">
        <Blob />
        <div className="w-auto md:w-8/12">
          <p className="text-md text-gray-500">Welcome, I&apos;m</p>
          <h1 className="text-7xl font-sans break-words font-semibold text-gradient dark:text-gradient-dark antialiased aos-init aos-animate">
            Marlon Acosta.
            <br />I build web and mobile apps.
          </h1>
          <p className="text-base font-sans text-gray-500 mt-8">I&apos;m a Full Stack Web Developer with a passion for building applications that are user-friendly and easy to use.</p>
          <div className="my-14 ">
            <Link href="/contact">
              <a className="text-md bg-black hover:bg-neutral-900 dark:bg-white dark:text-black text-white font-normal py-4 px-8 rounded-md transition-colors">Get in Touch</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
