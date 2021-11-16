import 'devicon/devicon.min.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import 'twin.macro';
import { GlobalStyles } from 'twin.macro';
import { MainLayout } from '../layouts/main';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     //Due to custom scrollbar, need to manually scroll to top of page on the route change
  //     const nav = document.getElementById('nav');
  //     nav?.scrollIntoView();
  //   };

  //   router.events.on('routeChangeComplete', handleRouteChange);

  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <>
      <GlobalStyles />
      <SimpleBar
        forceVisible="y"
        autoHide={false}
        style={{ maxHeight: '100vh' }}
      >
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </SimpleBar>
    </>
  );
}
export default MyApp;
