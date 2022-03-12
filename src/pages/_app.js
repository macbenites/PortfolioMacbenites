import AOS from 'aos';
import 'aos/dist/aos.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@styles/tailwind.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
