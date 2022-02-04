import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {createTheme, NextUIProvider} from '@nextui-org/react';
import React from 'react';
import {Head} from 'next/document';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "box-icons": React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: "dark",
    theme: {
      colors: {
        gradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(28,28,28,1) 20%, rgba(187,187,187,1) 100%)"
      }
    }
  })

  return (
    <NextUIProvider theme={theme}>
      <Head>
        <title>Daniel Wennemar</title>
        <script async src="https://cdn.splitbee.io/sb.js"/>
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp
