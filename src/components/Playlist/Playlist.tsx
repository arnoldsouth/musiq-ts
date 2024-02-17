// this component allows users to name their playlist and view the tracks in their playlist. it also includes a save button to save the playlist to spotify

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';

import Tracklist from '../Tracklist/Tracklist';
import { TrackDto } from '../Track/TrackDto';

interface PlaylistProps {
  playlistName?: string;
  playlistTracks: TrackDto[];
  onRemove?: (track: TrackDto) => void;
  onPlaylistNameInput: (name: string) => void;
  onSave: () => void;
}

const Playlist: React.FC<PlaylistProps> = ({
  playlistName,
  playlistTracks,
  onRemove,
  onPlaylistNameInput,
  onSave,
}) => {
  const handlePlaylistNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onPlaylistNameInput(e.target.value);
  };

  // console.log(playlistName);

  return (
    <Box display="flex" justifyContent="center">
      <form>
        <FormControl>
          <FormLabel fontWeight="bold">
            <Box display="flex" justifyContent="center">
              <Heading>Create a New Playlist</Heading>
            </Box>
          </FormLabel>

          <Input
            type="text"
            width="auto"
            placeholder="Playlist Name"
            size="md"
            value={playlistName}
            onChange={handlePlaylistNameInput}
          />

          <Button type="submit" onClick={onSave}>
            Save Playlist to Spotify
          </Button>

          <Tracklist tracks={playlistTracks} onRemove={onRemove} />
        </FormControl>
      </form>
    </Box>
  );
};

export default Playlist;
