// root component will hold state of search results, playlist name, and playlist tracks
// root component will handle user interactions such as adding/removing tracks from playlist and saving the playlist to spotify
// Once data is received from server it will flow through state, props and utility functions

import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Logo } from '../../Logo';
import customTheme from '../../assets/styles/customTheme';
import WithSubnavigation from '../Navbar/Navbar';

const theme = extendTheme(customTheme);

export const App = () => (
  <ChakraProvider theme={theme}>
    <WithSubnavigation />
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
