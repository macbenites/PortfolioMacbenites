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
      <div className="flex flex-col md:flex-row">
        <div className="w-auto md:w-8/12">
          <p className="text-sm text-gray-700">Welcome, I&apos;m</p>
          <h1 className="text-7xl font-sans break-words font-semibold text-cyan-900 antialiased">
            Marlon Acosta.
            <br />I build web and mobile apps.
          </h1>
          <p className="text-md font-sans text-gray-700 antialiased mt-8">
            I&apos;m a Full Stack Web Developer with a passion for building
            applications that are user-friendly and easy to use.
          </p>
          <div className="my-8">
            <Link href="/contact">
              <a className="text-lg bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-7 rounded-lg transition-colors">
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
    <section className="bg-white py-16">
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
