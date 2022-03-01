import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-4xl m-auto">{children}</main>
      <Footer />
    </div>
  );
}
