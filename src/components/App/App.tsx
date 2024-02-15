// root component will hold state of search results, playlist name, and playlist tracks
// root component will handle user interactions such as adding/removing tracks from playlist and saving the playlist to spotify
// Once data is received from server it will flow through state, props and utility functions

import { ChakraProvider, Box, Grid, extendTheme } from '@chakra-ui/react';

import customTheme from '../../assets/styles/customTheme';
import WithSubnavigation from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { useCallback, useState } from 'react';
import SpotifyApi from '../../utils/SpotifyApi';
import Tracklist from '../Tracklist/Tracklist';
import UserProfile from '../UserProfile/UserProfile';

const theme = extendTheme(customTheme);

export const searchResults = [
  { name: 'Track 1', artist: 'Artist 1', album: 'Album 1', id: '1' },
  { name: 'Track 2', artist: 'Artist 2', album: 'Album 2', id: '2' },
  { name: 'Track 3', artist: 'Artist 3', album: 'Album 3', id: '3' },
];

export const App = () => {
  // const [searchResults, setSearchResults] = useState([]);

  // const search = useCallback((searchInput) => {
  //   SpotifyApi.search(searchInput).then(setSearchResults);
  // }, []);

  const apiResults: any = searchResults;

  return (
    <ChakraProvider theme={theme}>
      <WithSubnavigation />
      <Box textAlign="center">
        <Grid mt={4}>
          {/* Move to Navbar */}
          <SearchBar />

          <UserProfile />

          <Box display={'flex'} justifyContent={'center'}>
            <SearchResults searchResults={apiResults} />

            <Playlist />
          </Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
