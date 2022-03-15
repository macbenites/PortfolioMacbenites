import dynamic from 'next/dynamic';
import MainLayout from '@layout/MainLayout';

const DynamicComponentWithCustomLoading = dynamic(() => import('@components/HomePage'), { loading: () => <p>...</p> });

export default function Home() {
  return (
    <MainLayout title="Home">
      <DynamicComponentWithCustomLoading />
    </MainLayout>
  );
}
