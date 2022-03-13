import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-6">{children}</main>
      <Footer />
    </>
  );
}
