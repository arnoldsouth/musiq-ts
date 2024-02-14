// this component represents a single track. it displays the track's name, artist, and album. it will also include a '+' or '-' button to add or remove the track from the playlist

import { Box, Button, Text } from '@chakra-ui/react';

const Track = ({ track }: any) => {
  return (
    <Box>
      <Text fontWeight="bold">{track.name}</Text>
      <Text>{track.album}</Text>
      <Text>{track.artist}</Text>

      <Box>
        {/* depending on the state of the track, render a '+' or '-' button */}
        {/* <Button>+</Button> */}
        {/* <Button>-</Button> */}
      </Box>
    </Box>
  );
};

export default Track;
