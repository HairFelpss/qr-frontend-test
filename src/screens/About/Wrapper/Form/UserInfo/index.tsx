import React from 'react';
import {
  Box,
  Stack,
  Avatar,
  Input,
  Button,
  VStack,
  Flex,
  Text,
} from '@chakra-ui/react';
import useUserStore from 'stores/user';

type UserInfoProps = {
  avatar: boolean;
};

export const UserInfo: React.FC<UserInfoProps> = ({ avatar }) => {
  const user = useUserStore((state) => state.users);

  return (
    <Box w="100%" textAlign="left">
      <Stack direction={['column', 'row']} pt={10}>
        {avatar && (
          <VStack>
            <Avatar
              size="2xl"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
            <Button w="100%">Atualizar</Button>
          </VStack>
        )}
        <Box w="100%" pt={10} pl={5} pr={5}>
          <Stack spacing={5}>
            <VStack align="flex-start">
              <Text>Nome</Text>
              <Input variant="filled" />
            </VStack>

            <VStack align="flex-start">
              <Text>Email</Text>
              <Input variant="filled" />
            </VStack>

            <VStack align="flex-start">
              <Text>CPF</Text>
              <Input variant="filled" />
            </VStack>

            <VStack align="flex-start">
              <Text>Data de admissao</Text>
              <Input variant="filled" />
            </VStack>

            <VStack align="flex-start">
              <Text>Cargo</Text>
              <Input variant="filled" />
            </VStack>

            <Flex justify="flex-end" w="100%">
              <Button>Salvar</Button>
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
