// root component will hold state of search results, playlist name, and playlist tracks
// root component will handle user interactions such as adding/removing tracks from playlist and saving the playlist to spotify
// Once data is received from server it will flow through state, props and utility functions

import {
  ChakraProvider,
  Box,
  extendTheme,
  Flex,
  Spacer,
} from '@chakra-ui/react';

import customTheme from '../../assets/styles/customTheme';
import WithSubnavigation from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { useCallback, useState } from 'react';
import SpotifyApi from '../../utils/SpotifyApi';
import Tracklist from '../Tracklist/Tracklist';
import UserProfile from '../UserProfile/UserProfile';
import { TrackDto } from '../Track/TrackDto';

const theme = extendTheme(customTheme);

export const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<TrackDto[]>([
    {
      id: '1',
      name: 'Track 1',
      artist: 'Artist 1',
      album: 'Album 1',
      uri: 'spotify:track:1',
    },
    {
      id: '2',
      name: 'Track 2',
      artist: 'Artist 2',
      album: 'Album 2',
      uri: 'spotify:track:2',
    },
    {
      id: '3',
      name: 'Track 3',
      artist: 'Artist 3',
      album: 'Album 3',
      uri: 'spotify:track:3',
    },
  ]);

  const [playlistTracks, setPlaylistTracks] = useState<TrackDto[]>([]);
  const [playlistName, setPlaylistName] = useState<string>('');

  const addTrack = (track: TrackDto) => {
    if (!playlistTracks.find((savedTracks) => savedTracks.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (track: TrackDto) => {
    setPlaylistTracks(
      playlistTracks.filter((savedTracks) => savedTracks.id !== track.id)
    );
  };

  const createPlaylistName = (name: string) => {
    setPlaylistName(name);
    console.log(name);
  };

  // function to save playlist to spotify. spotify uses track uris to reference tracks in their library
  const savePlaylist = () => {
    // const trackUris = playlistTracks.map((track) => track.uri);
    // SpotifyApi.createPlaylist(playlistName, trackUris).then((response) => {
    //   console.log(response);
    // });

    // map over playlistTracks to get track uri and assign it to avariable to store the array of track uris in the playlist
    const trackUris = playlistTracks.map((track) => track.uri);
    console.log(trackUris);

    // Logic to save playlist to spotify
    // save playlist to spotify
    // SpotifyApi.createPlaylist(playlistName, trackUris).then((response) => {
    //   console.log(response);
    // });

    // reset the playlist so it's a new playlist after saving
    setPlaylistName('');
    setPlaylistTracks([]);
  };

  return (
    <ChakraProvider theme={theme}>
      <WithSubnavigation />

      <SearchBar />

      <UserProfile />

      <Box p={4}>
        <Flex justify={'center'} gap={4}>
          <Box>
            <SearchResults searchResults={searchResults} onAdd={addTrack} />
          </Box>

          <Spacer />

          <Box>
            <Playlist
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onRemove={removeTrack}
              onPlaylistNameInput={createPlaylistName}
              onSave={savePlaylist}
            />
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};
