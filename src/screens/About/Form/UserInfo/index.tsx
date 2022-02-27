import React from 'react';
import { useForm } from 'react-hook-form';

import { Box, Stack, VStack, Flex, Button } from '@chakra-ui/react';

import { useMutation } from 'react-query';

import { api } from 'services/Global';

import {
  FormDate,
  FormDocument,
  FormEmail,
  FormInput,
} from 'components/Form/Inputs';

import { SetAvatar } from 'components/SetAvatar';

import useUserStore, { UserType } from 'stores/user';

type UserInfoProps = {
  user?: UserType;
  avatar: boolean;
};

type FormData = {
  name: string;
  email: string;
  date: string;
  role: string;
  job_title: string;
};

export const UserInfo: React.FC<UserInfoProps> = ({ avatar, user }) => {
  const addUser = useUserStore((state) => state.addUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const createUpdateUser = useMutation((data: FormData) => {
    const { date, ...rest } = data;

    const user = { ...rest, admission_date: date };

    if (user) {
      return api.put('/users', { user }).then(({ data }) => data);
    }

    return api.post('/users', { user }).then(({ data }) => data);
  });

  return (
    <Box w="100%" textAlign="left">
      <Stack direction={['column', 'row']} pt={10}>
        {avatar && <SetAvatar />}
        <Box w="100%" pt={10} pl={5} pr={5}>
          <form
            onSubmit={handleSubmit((data) => {
              createUpdateUser.mutate(data);
            })}>
            <Stack spacing={5}>
              <VStack align="flex-start">
                <FormInput
                  register={register}
                  errors={errors}
                  type="name"
                  required="nome"
                  title="Nome"
                />
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
                  type="job_title"
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
