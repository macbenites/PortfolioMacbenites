import Image from "next/image";
export default function ProjectsPage() {
  return (
    <section className="flex flex-col md:flex-row	content-center bg-white min-h-screen mt-10 p-6">
      <div className="w-full">
        <h1 className="text-5xl font-sans break-words font-extrabold text-cyan-900 antialiased">
          Some projects <br />
          <span className="text-5xl font-sans break-words font-extrabold text-orange-600 antialiased">
            I&apos;ve Built
          </span>
        </h1>
        <div className="mt-5">
          <CardProjects
            src={"/image/react.svg"}
            alt="Countries App"
            title="Countries App"
            description="A simple app to show you the countries in the world."
          />
        </div>
      </div>
    </section>
  );
}

const CardProjects = ({ src, alt, title, description }) => {
  return (
    <div className="hover:bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500  p-4 rounded-2xl transition-colors">
      <div className="flex gap-3 bg-white p-6 rounded-2xl hover:shadow-lg hover:shadow-gray-500/50">
        <Image src={src} width={40} height={40} alt={alt} />
        <div>
          <h2 className="text-xl font-bold text-cyan-900">{title}</h2>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};
