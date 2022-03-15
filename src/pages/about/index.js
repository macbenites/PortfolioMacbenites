import dynamic from 'next/dynamic';
import MainLayout from '@layout/MainLayout';

const DynamicComponentWithCustomLoading = dynamic(() => import('@components/AboutUsPage'), { loading: () => <p>...</p> });

export default function About() {
  return (
    <MainLayout title="AboutMe">
      <DynamicComponentWithCustomLoading />
    </MainLayout>
  );
}
