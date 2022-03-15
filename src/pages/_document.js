import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" class="dark">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#fff" />
        <meta
          name="description"
          content="Portafolio desarrollado por Marlon Alexis Acosta Benites, con el fin de aprender a desarrollar aplicaciones web con Next.js, React.js, Tailwind. Aquí encontraras información acerca de mí, algunos proyectos que he desarrollado, habilidades que he adquirido y algunas de mis redes sociales."
        />
      </Head>
      <body className="dark:bg-dark-default dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
