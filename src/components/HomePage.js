import Blob from '@components/Blob';
import Link from 'next/link';

const HomePage = () => {
  return (
    <section className="py-16 md:py-24" data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
      <div className="relative flex flex-col md:flex-row m-auto">
        <Blob />
        <div className="flex flex-col justify-between w-auto gap-5 md:w-7/12">
          <p className="text-md text-gray-500">Bienvenido, Soy</p>
          <h1 className="text-6xl font-sans break-words font-semibold text-gradient dark:text-gradient-dark antialiased aos-init aos-animate">
            Marlon Acosta.
            <br />
            Full Stack Web Developer
          </h1>
          <p className="text-base font-sans text-gray-500 mt-8">Me gusta crear productos sólidos y escalables con excelentes experiencias de usuario.</p>
          <Link href="/contact">
            <a className="text-md bg-black dark:hover:bg-gray-300 hover:bg-neutral-900 dark:bg-white  dark:text-black text-white text-center font-normal py-4 px-8 rounded-md transition-colors w-full sm:w-48">Contáctame</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
