// renders a list of `Track` components. it will be used by both the `SearchResults` and `Playlist` components
// we will map over the tracks prop and render a `Track` component for each one

import { Box } from '@chakra-ui/react';
import Track from '../Track/Track';

const Tracklist = ({ tracks }: any) => {
  // map over the tracks and render a Track component for each one

  const renderedTracks = tracks.map((track: any) => {
    return <Track key={track.id} track={track} />;
  });

  return (
    <Box>
      {renderedTracks}
      {/* map over the tracks and render a Track component for each one */}
    </Box>
  );
};

export default Tracklist;
