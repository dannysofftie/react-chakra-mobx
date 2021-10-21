import { ChakraProvider, ColorModeProvider, useColorMode } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import { Fragment } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import ApplicationRouter from './routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: true,
      refetchOnReconnect: true,
    },
  },
  queryCache: new QueryCache({
    onError: (err, query) => {
      console.log(err);
    },
  }),
});

const GlobalStyle = ({ children }: { children: any }) => {
  const { colorMode } = useColorMode();

  return (
    <Fragment>
      <Global
        styles={css`
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171717'};
          }
        `}
      />
      {children}
    </Fragment>
  );
};

const App = () => {
  return (
    <ChakraProvider>
      {/* head settings */}

      <ColorModeProvider
        options={{
          initialColorMode: 'light',
          useSystemColorMode: true,
        }}
      >
        <GlobalStyle>
          <QueryClientProvider client={queryClient}>
            {/* react query dev tools */}
            <ReactQueryDevtools />
            <ApplicationRouter />
          </QueryClientProvider>
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default App;
