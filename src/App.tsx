import React from 'react';
import { ChakraProvider, theme, Box, Grid } from '@chakra-ui/react';

import { QueryClient, QueryClientProvider } from 'react-query';

import Router from 'routes';

import Nav from 'components/Navbar';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Box fontSize="xl">
          <Nav />
          <Grid p={3}>
            <Router />
          </Grid>
        </Box>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
