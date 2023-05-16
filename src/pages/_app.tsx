import React from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider attribute="class">
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ThemeProvider>
  );
}
export default appWithTranslation(MyApp);
