import dynamic from 'next/dynamic';
import MainLayout from '@layout/MainLayout';

const DynamicComponentWithCustomLoading = dynamic(() => import('@components/ContactPage'), { loading: () => <p>...</p> });

export default function Contact() {
  return (
    <MainLayout title="ContactMe">
      <DynamicComponentWithCustomLoading />
    </MainLayout>
  );
}
