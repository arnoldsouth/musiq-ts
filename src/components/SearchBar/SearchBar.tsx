// this component will have an input field and a button for users to initiate a search

import { Box, Button, FormControl, Input } from '@chakra-ui/react';
import { useState } from 'react';

const SearchBar = ({ onSearch }: any) => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  const search = () => {
    onSearch(searchInput);
  };

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
            onChange={handleInputChange}
          />

          <Button type="submit" onSubmit={search}>
            Submit
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default SearchBar;
