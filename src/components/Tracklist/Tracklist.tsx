// renders a list of `Track` components. it will be used by both the `SearchResults` and `Playlist` components
// we will map over the tracks prop and render a `Track` component for each one

import { Box, Text } from '@chakra-ui/react';
import { TrackDto } from '../Track/TrackDto';
import Track from '../Track/Track';

interface TracklistProps {
  tracks: TrackDto[];
  onAdd?: (track: TrackDto) => void;
  onRemove?: (track: TrackDto) => void;
}

const Tracklist: React.FC<TracklistProps> = ({ tracks, onAdd, onRemove }) => {
  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <Track key={track.id} track={track} onAdd={onAdd} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Tracklist;
