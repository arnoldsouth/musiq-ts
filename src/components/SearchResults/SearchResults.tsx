// this component will contain a `Tracklist` component to list each track

import { Box, Text } from '@chakra-ui/react';
import Tracklist from '../Tracklist/Tracklist';

const SearchResults = ({ searchResults }: any) => {
  return (
    <Box>
      <Text fontWeight="bold">Search Results</Text>

      <Tracklist tracks={searchResults} />
    </Box>
  );
};

export default SearchResults;
