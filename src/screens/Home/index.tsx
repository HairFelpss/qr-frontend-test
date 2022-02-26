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

import { FaSearch } from 'react-icons/fa';

import { Activities } from 'components/Activities';
import { Scrollbar } from 'components/Scrollbar';

import useUserStore from 'stores/user';
import { useUsers } from 'services/Users';

import { UsersTable } from './Wrapper/UsersTable';

export const Home: React.FC = () => {
  const addUsers = useUserStore((state) => state.addUsers);

  const { data, isSuccess } = useUsers();

  if (data && isSuccess) addUsers(data.users);

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
              <Button colorScheme="blue">
                <Link to="/about">Criar</Link>
              </Button>
            </Box>
          </HStack>

          <Box mt={4} mb={2}>
            {data?.users && <UsersTable users={data?.users} />}
          </Box>
        </Box>
        <Box w="30%" height="100%" p={2}>
          <Scrollbar maxH="80vh" overflowY="auto">
            <Activities />
          </Scrollbar>
        </Box>
      </Stack>
    </Box>
  );
};
