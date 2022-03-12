import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" class="dark">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <body className="dark:bg-dark-default dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
