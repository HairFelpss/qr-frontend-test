import React from 'react';

import {
  Box,
  Input,
  Stack,
  StackDivider,
  HStack,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { Activities } from 'screens/About/Wrapper/Activities';

import { Scrollbar } from 'components/Scrollbar';

import { FaSearch } from 'react-icons/fa';

import useUserStore from 'stores/user';

import { useUsers } from 'services/Users';

import { UsersTable } from './Wrapper/UsersTable';

export const Home: React.FC = () => {
  const addUsers = useUserStore((state) => state.addUsers);
  const users = useUserStore((state) => state.users);

  const { data } = useUsers();

  if (data) addUsers(data.users);

  return (
    <Box w="100%" p={4}>
      <Stack
        direction={['column', 'row']}
        spacing="24px"
        height="100%"
        divider={<StackDivider borderColor="gray.200" />}>
        <Box w="70%" height="100%">
          <HStack justify="space-between" p={2}>
            <Box>
              <InputGroup>
                <Input placeholder="Buscar" />
                <InputRightElement children={<FaSearch color="green.500" />} />
              </InputGroup>
            </Box>
            <Box>
              <Button colorScheme="blue">Criar</Button>
            </Box>
          </HStack>

          <Box mt={4} mb={2}>
            {users.length > 0 && <UsersTable users={users} />}
          </Box>
        </Box>
        <Box w="30%" height="100%" p={2}>
          <Scrollbar maxH="80vh" overflowY="auto">
            <Activities />
          </Scrollbar>
        </Box>
      </Stack>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </Box>
  );
};
