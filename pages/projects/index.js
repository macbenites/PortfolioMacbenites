import ProjectsPage from "../../components/ProjectsPage";
import Layout from "../../components/Layout";
import { projects } from "../../public/data/projects";

export default function Projects({ projects }) {
  return (
    <Layout title="Projects">
      <ProjectsPage projects={projects} />
    </Layout>
  );
}

export function getStaticProps() {
  return {
    props: {
      projects,
    },
  };
}
