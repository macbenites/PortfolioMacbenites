import dynamic from 'next/dynamic';
import MainLayout from '@layout/MainLayout';
import { projects } from '../../../public/data/projects';

const DynamicComponentWithCustomLoading = dynamic(() => import('@components/ProjectsPage'), { loading: () => <p>...</p> });

export default function Projects({ projects }) {
  return (
    <MainLayout title="Projects">
      <DynamicComponentWithCustomLoading projects={projects} />
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
