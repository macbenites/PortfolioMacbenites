import Layout from "../components/Layout";
import CardServices from "../components/CardServices";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="Home">
      <Main />
      <Services />
    </Layout>
  );
}

const Main = () => {
  return (
    <section className="container">
      <div className="relative flex flex-col md:flex-row">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 dark:bg-slate-100 rounded-full mix-blend-multiply filter blur-xl dark:blur-2xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-36 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-32 right-8 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="w-auto md:w-8/12">
          <p className="text-md text-gray-500">Welcome, I&apos;m</p>
          <h1 className="text-7xl font-sans break-words font-semibold text-gradient dark:text-gradient-dark antialiased aos-init aos-animate">
            Marlon Acosta.
            <br />I build web and mobile apps.
          </h1>
          <p className="text-xl font-sans text-gray-500 mt-8">
            I&apos;m a Full Stack Web Developer with a passion for building
            applications that are user-friendly and easy to use.
          </p>
          <div className="my-14">
            <Link href="/contact">
              <a className="text-md bg-black hover:bg-neutral-900 dark:bg-white dark:text-black text-white font-normal py-4 px-8 rounded-md transition-colors">
                Get in Touch
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row mt-10">
        <div className="flex flex-col w-auto bg-sky-200 md:w-6/12 rounded-2xl p-5 h-2/3 gap-4">
          <CardServices
            src={"/image/react.svg"}
            title="React"
            description="lorem "
            alt={"React Icon"}
          />
          <CardServices
            src={"/image/figma.svg"}
            title="Figma"
            description="Figma developer "
            alt={"Figma Icon"}
          />
          <CardServices
            src={"/image/github.svg"}
            title="Github"
            description="Github developer"
            alt={"Github Icon"}
          />
        </div>
        <div className="w-auto md:w-6/12 sm:px-10 py-10 ">
          <h1 className="text-5xl font-sans break-words font-extrabold text-cyan-900 antialiased">
            My awesome <br />
            <span className="text-5xl font-sans break-words font-extrabold text-orange-600 antialiased">
              Services
            </span>
          </h1>
          <p className="text-lg font-sans text-gray-700 antialiased mt-8">
            I am a Full Stack Web Developer with a passion for building
            applications that are user-friendly and easy to use. I am a Full
            Stack Web Developer with a passion for building applications that
            are user-friendly and easy to use.
          </p>
          <button className="text-lg bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-7 rounded-lg mt-8 transition-colors">
            Hire CV
          </button>
        </div>
      </div>
    </section>
  );
};
