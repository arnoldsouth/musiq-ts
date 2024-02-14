// root component will hold state of search results, playlist name, and playlist tracks
// root component will handle user interactions such as adding/removing tracks from playlist and saving the playlist to spotify
// Once data is received from server it will flow through state, props and utility functions

import * as React from 'react';
import { ChakraProvider, Box, Grid, extendTheme } from '@chakra-ui/react';

import customTheme from '../../assets/styles/customTheme';
import WithSubnavigation from '../Navbar/Navbar';

const theme = extendTheme(customTheme);

export const App = () => (
  <ChakraProvider theme={theme}>
    <WithSubnavigation />
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}></Grid>
    </Box>
  </ChakraProvider>
);
