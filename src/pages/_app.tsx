import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { EmotionCache } from "@emotion/cache";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";

import createEmotionCache from "utils/emotionCache";
import { MediaContextProvider } from "context/Media";
import theme from "theme";
const clientSideEmotionCache = createEmotionCache();

import "styles/global.css";
// Swiper core styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.scss";
interface MyAppProps extends AppProps {
  emotionCache: EmotionCache;
}

const App = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) => {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <MediaContextProvider>
          <ThemeProvider theme={theme}>
            <Head>
              <title>Lazos</title>
              <meta
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
                name="viewport"
              />
              <meta content="" name="description" />
              <link href="/favicon.png" rel="icon" type="image/x-icon" />
            </Head>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </MediaContextProvider>
      </CacheProvider>
    </>
  );
};

export default App;
