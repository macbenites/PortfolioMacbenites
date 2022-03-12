import Image from 'next/image';

const TimeLine = () => {
  return (
    <section class="container">
      <h1 className="text-7xl font-sans break-words font-semibold text-gradient dark:text-gradient-dark antialiased" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        Education.
      </h1>
      <div className="relative container mx-auto  flex flex-col space-y-8  my-20">
        <div
          class="absolute h-full z-0 w-px bg-slate-400 shadow-lg inset-0 left-12 md:mx-auto md:right-0 md:left-0 rounded-md"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        ></div>
        <div class="relative z-20 " data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <img src="https://res.cloudinary.com/djqkj0inf/image/upload/v1647064787/Portfolio%20/henry_dkova2.png" alt="" class="timeline-img"  />
          <div class="timeline-container ">
            <div class="timeline-pointer bg-slate-100 dark:bg-dark-700" aria-hidden="true"></div>
            <div class=" p-6 rounded-md shadow-2xl bg-slate-100 dark:bg-dark-700">
              <span class="font-bold text-indigo-600 dark:text-indigo-400 text-sm tracking-wide">Oct 2021 . Feb 2022 </span>
              <h1 class="text-2xl font-bold pt-1 text-black dark:text-white">Full Stack Web Developer</h1>
              <h3 class="text-lg font-bold pt-1 text-slate-500">Bootcamp Henry </h3>
              <p class="pt-8 text-black dark:text-white">+ 800 hours of theoretical-practical coursework. Formed at Front-End and Back-End technologies.</p>
            </div>
          </div>
        </div>
        <div class="relative z-10" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <img src="https://res.cloudinary.com/djqkj0inf/image/upload/v1647064726/Portfolio%20/upn_giq4a9.png" alt="" class="timeline-img"  />
          <div class="timeline-container timeline-container-left">
            <div class="timeline-pointer timeline-pointer-left bg-slate-100 dark:bg-dark-700" aria-hidden="true"></div>
            <div class=" p-6 rounded-md shadow-2xl bg-slate-100 dark:bg-dark-700">
              <span class="font-bold text-indigo-600 dark:text-indigo-400 text-sm tracking-wide">March 2016 . Present </span>
              <h1 class="text-2xl font-bold pt-1 text-black dark:text-white">Ing. De Sistemas Computacionales</h1>
              <h3 class="text-lg font-bold pt-1 text-slate-500">Universidad Privada del Norte </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
