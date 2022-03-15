import ProjectsPage from '@components/ProjectsPage';
import MainLayout from '@layout/MainLayout';
import { projects } from '../../../public/data/projects';

export default function Projects({ projects }) {
  return (
    <MainLayout title="Projects">
      <ProjectsPage projects={projects} />
    </MainLayout>
  );
}

export function getStaticProps() {
  return {
    props: {
      projects,
    },
  };
}
