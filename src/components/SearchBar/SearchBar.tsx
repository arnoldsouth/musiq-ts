// this component will have an input field and a button for users to initiate a search

import { Box, Button, FormControl, Input } from '@chakra-ui/react';

const SearchBar = () => {
  return (
    <Box display="flex" justifyContent="center">
      <form>
        <FormControl>
          {/* <FormLabel>Search</FormLabel> */}

          <Input type="text" width="auto" placeholder="Search" size="md" />

          <Button type="submit">Submit</Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default SearchBar;
