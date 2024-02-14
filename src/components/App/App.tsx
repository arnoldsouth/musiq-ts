// root component will hold state of search results, playlist name, and playlist tracks
// root component will handle user interactions such as adding/removing tracks from playlist and saving the playlist to spotify
// Once data is received from server it will flow through state, props and utility functions

import { ChakraProvider, Box, Grid, extendTheme } from '@chakra-ui/react';

import customTheme from '../../assets/styles/customTheme';
import WithSubnavigation from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { useState } from 'react';

const theme = extendTheme(customTheme);

const searchResults = [
  { name: 'Track 1', artist: 'Artist 1', album: 'Album 1', id: '1' },
];

export const App = () => {
  // const [searchResults, setSearchResults] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <WithSubnavigation />
      <Box textAlign="center">
        <Grid minH="100vh" p={3}>
          <SearchBar />

          <SearchResults searchResults={searchResults} />
          <Playlist />
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
