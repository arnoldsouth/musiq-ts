// this component will contain a `Tracklist` component to list each track

import { Box, Heading, Text } from '@chakra-ui/react';
import Tracklist from '../Tracklist/Tracklist';
import { TrackDto } from '../Track/TrackDto';

// create SearchResults component to accept an array of tracks as props, and then pass it down to the Tracklist component
interface SearchResultsProps {
  searchResults: TrackDto[];
  onAdd: (track: TrackDto) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  searchResults,
  onAdd,
}) => {
  return (
    <Box>
      <Heading>Search Results</Heading>

      <Tracklist tracks={searchResults} onAdd={onAdd} />
    </Box>
  );
};

export default SearchResults;
