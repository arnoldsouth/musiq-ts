// renders a list of `Track` components. it will be used by both the `SearchResults` and `Playlist` components
// we will map over the tracks prop and render a `Track` component for each one

import { Box } from '@chakra-ui/react';
import Track from '../Track/Track';
import { searchResults } from '../App/App';

// map over the tracks and render a Track component for each one

// const renderedTracks = tracks.map((track: any) => {
//   return <Track key={track.id} track={track} />;
// });

const Tracklist = ({ tracks }: any) => {
  tracks = searchResults;

  return (
    // map over the tracks and render a Track component for each one
    // <div>
    //   {tracks.map((track: any) => {
    //     return <Track key={track.id} tracks={track} />;
    //   })}
    // </div>

    // <div>
    //   {tracks.map((track: any) => {
    //     return <Track key={track.id} track={track} />;
    //   })}
    // </div>

    <>Tracklist</>
  );
};

export default Tracklist;
