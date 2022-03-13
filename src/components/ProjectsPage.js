import Project from '@components/Project';

export default function ProjectsPage({ projects }) {
  return (
    <section className="py-12 md:py-16">
      <h1 className="text-6xl font-sans break-words font-semibold text-gradient dark:text-gradient-dark antialiased">Some Projects.</h1>
      <div>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
