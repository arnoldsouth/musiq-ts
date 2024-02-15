// this component will contain a `Tracklist` component to list each track

import { Box, Heading, Text } from '@chakra-ui/react';
import Tracklist from '../Tracklist/Tracklist';

const SearchResults = ({ searchResults }: any) => {
  return (
    <Box>
      <Heading fontWeight="bold">Search Results</Heading>

      <Tracklist tracks={searchResults} />
    </Box>
  );
};

export default SearchResults;
