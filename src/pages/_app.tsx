import { type AppType } from "next/app";
import { api } from "~app/utils/api";
import "~app/styles/globals.css";
import Head from 'next/head'
import { MantineProvider, Button } from '@mantine/core';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};




export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',

          components: {
            Text: {
              styles: {
                root: { fontSize: '30rem' },
              },
            },            
          },
          
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
   api.withTRPC(MyApp);
}