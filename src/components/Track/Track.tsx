// this component represents a single track. it displays the track's name, artist, and album. it will also include a '+' or '-' button to add or remove the track from the playlist
import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import { TrackDto } from './TrackDto';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface TrackProps {
  track: TrackDto;
  onAdd?: (track: TrackDto) => void;
  onRemove?: (track: TrackDto) => void;
}

const Track: React.FC<TrackProps> = ({ track, onAdd, onRemove }) => {
  const addTrack = () => {
    if (onAdd) {
      onAdd(track);
    }
  };

  const removeTrack = () => {
    if (onRemove) {
      onRemove(track);
    }
  };

  const renderAddRemoveButton = () => {
    if (onAdd) {
      return (
        <Box>
          <Button size="xs" onClick={addTrack}>
            <FaPlus />
          </Button>
        </Box>
      );
    }

    if (onRemove) {
      return (
        <Box>
          <Button size="xs" onClick={removeTrack}>
            <FaMinus />
          </Button>
        </Box>
      );
    }
  };

  return (
    <Box py={4}>
      <Flex gap={4} alignItems="center">
        <Box>
          <Text fontWeight="bold">{track.name}</Text>

          <Flex gap={4}>
            <Text fontSize="sm">{track.artist}</Text>
            <Text fontSize="sm">•</Text>
            <Text fontSize="sm">{track.album}</Text>
          </Flex>
        </Box>
        <Spacer />

        {renderAddRemoveButton()}
      </Flex>
    </Box>
  );
};

export default Track;
