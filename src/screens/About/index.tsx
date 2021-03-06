import React from 'react';

import { Box, Stack, StackDivider } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { Activities } from 'components/Activities';
import { UserInfo } from 'screens/About/Form/UserInfo';
import { Comments } from 'components/Comments';

export const About: React.FC = () => (
  <Box w="100%" p={4}>
    <Stack
      direction={['column', 'row']}
      spacing="24px"
      height="100%"
      border="1px solid black"
      divider={<StackDivider borderColor="gray.200" />}>
      <Box w="70%" height="100%" pt={4} pr={4} pl={4}>
        <UserInfo avatar />
        <Comments />
      </Box>
      <Box w="30%" height="100%" p={2}>
        <Activities />
      </Box>
    </Stack>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </Box>
);
