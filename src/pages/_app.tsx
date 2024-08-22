
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { customTheme } from '@/core/theme/theme';
import Navbar from '@/components/NavBar';

function MyApp({ Component, pageProps }: { Component: React.ComponentType<any>; pageProps: any }){

  const queryClient = new QueryClient();
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <QueryClientProvider client={queryClient}>
      <Navbar />
      <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
