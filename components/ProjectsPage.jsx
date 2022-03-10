import Image from "next/image";

export default function ProjectsPage({ projects }) {
  return (
    <section className="flex flex-col md:flex-row	content-center min-h-screen mt-10 p-6">
      <div className="w-full">
        <h1 className="text-5xl font-sans break-words font-extrabold text-cyan-900 antialiased">
          Some projects <br />
          <span className="text-5xl font-sans break-words font-extrabold text-orange-600 antialiased">
            I&apos;ve Built
          </span>
        </h1>
        <div className="mt-5">
          {projects.map((project) => (
            <div
              className="flex flex-col md:flex-row items-center justify-center mb-10"
              key={project.id}
            >
              <div className="w-full md:w-1/2">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
