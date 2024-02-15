import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

import glassesTransparent from '../../assets/images/glasses-transparent.svg';

const user = {
  name: 'Arnold Southammavong',
  image: glassesTransparent,
  email: 'email@example.com',
};

const UserProfile = () => {
  const { name, image, email } = user;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Heading>{name}</Heading>

      <Text fontSize={'sm'} color={'gray.500'}>
        Email: {email}
      </Text>

      <br />

      <Image src={image} alt="user-image" rounded="full" boxSize="150px" />
    </Box>
  );
};

export default UserProfile;
