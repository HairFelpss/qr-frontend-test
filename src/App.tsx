import React from 'react';
import { ChakraProvider, theme, Box, Grid } from '@chakra-ui/react';
import Router from './routes';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Router />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
