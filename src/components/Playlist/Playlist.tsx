// this component allows users to name their playlist and view the tracks in their playlist. it also includes a save button to save the playlist to spotify

import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = () => {
  return (
    <Box display="flex" justifyContent="center">
      <form>
        <FormControl>
          <FormLabel fontWeight="bold">Create a New Playlist</FormLabel>

          <Input
            type="text"
            width="auto"
            placeholder="Playlist Name"
            size="md"
          />

          <Button type="submit">Save Playlist to Spotify</Button>

          <Tracklist />
        </FormControl>
      </form>
    </Box>
  );
};

export default Playlist;
