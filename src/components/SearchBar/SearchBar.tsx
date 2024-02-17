// this component will have an input field and a button for users to initiate a search

import { Box, Button, FormControl, Input } from '@chakra-ui/react';
import { useCallback, useState } from 'react';

const SearchBar = () => {
  // const [searchInput, setSearchInput] = useState('');

  // const handleInputChange = useCallback((e) => {
  //   setSearchInput(e.target.value);
  // }, []);

  // const search = useCallback(() => {
  //   onSearch(searchInput);
  // }, [onSearch, searchInput]);

  return (
    <Box display="flex" justifyContent="center">
      <form>
        <FormControl>
          {/* <FormLabel>Search</FormLabel> */}

          <Input
            type="text"
            width="auto"
            placeholder="Search"
            size="md"
            // onChange={}
          />

          <Button type="submit">Submit</Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default SearchBar;
