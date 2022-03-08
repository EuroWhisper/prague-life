import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '../lib/apolloClient';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme: DefaultTheme = {
  fontFamily: 'Arial',
  colors: {
    primary: '#0070f3',
    grey: '#333333',
    ratingStar: '#faaf00',
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = createApolloClient();
  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
