import React from 'react';

import {
  Box,
  Input,
  Stack,
  StackDivider,
  HStack,
  Button,
  Table,
  Tr,
  Th,
  Thead,
  Tbody,
  Td,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { Activities } from 'wrappers/Activities';

import { ColorModeSwitcher } from 'components/ColorMode/Switcher';
import { FaSearch } from 'react-icons/fa';

import useFetch from 'use-http';
import useUserStore, { UserType } from 'stores/user';

export const Home: React.FC = () => {
  const addUsers = useUserStore((state) => state.addUsers);
  const users = useUserStore((state) => state.users);

  const { get, post, response, loading, error } = useFetch(
    `https://qr-challenge.herokuapp.com/api/v1`,
  );

  React.useEffect(() => {
    (async function () {
      const { users } = await get('/users');
      if (response.ok && users) addUsers(users);
    })();
  }, []);

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
            <Box
              maxH="80vh"
              overflowY="auto"
              css={{
                '&::-webkit-scrollbar': {
                  width: '20px',
                },
                '&::-webkit-scrollbar-track': {
                  'background-color': 'transparent',
                },
                '&::-webkit-scrollbar-thumb': {
                  'background-color': '#d6dee1',
                  'border-radius': '20px',
                  border: '6px solid transparent',
                  'background-clip': 'content-box',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  'background-color': '#a8bbbf',
                },
              }}>
              <Table size="sm" variant="striped" colorScheme="blue">
                <Thead>
                  <Tr>
                    <Th>Nome</Th>
                    <Th>Cargo</Th>
                    <Th>CPF</Th>
                    <Th>Email</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {users.map((user) => (
                    <Tr>
                      <Td>{user.name}</Td>
                      <Td>{user.job_title}</Td>
                      <Td>{user.id}</Td>
                      <Td>{user.email}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </Box>
        </Box>
        <Box w="30%" height="100%" p={2}>
          <Box
            maxH="80vh"
            overflowY="auto"
            css={{
              '&::-webkit-scrollbar': {
                width: '20px',
              },
              '&::-webkit-scrollbar-track': {
                'background-color': 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                'background-color': '#d6dee1',
                'border-radius': '20px',
                border: '6px solid transparent',
                'background-clip': 'content-box',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                'background-color': '#a8bbbf',
              },
            }}>
            <Activities />
          </Box>
        </Box>
      </Stack>
      <nav>
        <Link to="/about">About</Link>
        <ColorModeSwitcher />
      </nav>
    </Box>
  );
};
