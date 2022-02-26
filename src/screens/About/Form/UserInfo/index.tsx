import React from 'react';
import { useForm } from 'react-hook-form';

import { Box, Stack, VStack, Flex, Button } from '@chakra-ui/react';

import {
  FormDate,
  FormDocument,
  FormEmail,
  FormInput,
} from 'components/Form/Inputs';

import { SetAvatar } from 'components/SetAvatar';

type UserInfoProps = {
  avatar: boolean;
};

type FormData = {
  name: string;
  document: string;
  email: string;
  date: string;
  role: string;
};

export const UserInfo: React.FC<UserInfoProps> = ({ avatar }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <Box w="100%" textAlign="left">
      <Stack direction={['column', 'row']} pt={10}>
        {avatar && <SetAvatar />}
        <Box w="100%" pt={10} pl={5} pr={5}>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <Stack spacing={5}>
              <VStack align="flex-start">
                <FormDocument register={register} errors={errors} />
              </VStack>

              <VStack align="flex-start">
                <FormEmail register={register} errors={errors} />
              </VStack>

              <VStack align="flex-start">
                <FormDocument register={register} errors={errors} />
              </VStack>

              <VStack align="flex-start">
                <FormDate register={register} errors={errors} />
              </VStack>

              <VStack align="flex-start">
                <FormInput
                  register={register}
                  errors={errors}
                  type="Cargo"
                  required="cargo"
                  title="Cargo"
                />
              </VStack>

              <Flex justify="flex-end" w="100%">
                <Button type="submit">Salvar</Button>
              </Flex>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Box>
  );
};
