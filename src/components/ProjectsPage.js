import Project from '@components/Project';

export default function ProjectsPage({ projects }) {
  return (
    <section className="flex flex-col md:flex-row	content-center">
      <div className="min-h-screen mt-28">
        <h1 className="text-7xl font-sans break-words font-semibold text-gradient dark:text-gradient-dark antialiased mb-10">Some Projects.</h1>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
