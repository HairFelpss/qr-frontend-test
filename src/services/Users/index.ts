import { useQuery, UseQueryOptions, useMutation } from 'react-query';

import { api } from 'services/Global';

import { UserType } from 'stores/user';

import { UserTypeProps } from './types';

import {
  createGetAllUsersKey,
  createGetUserKey,
  createPostUserKey,
} from './keys';

type FormData = {
  name: string;
  document: string;
  email: string;
  date: string;
  role: string;
  job_title: string;
};

export const getAllUsers = (options?: UseQueryOptions<UserTypeProps>) => {
  return useQuery(
    createGetAllUsersKey(),
    () => api.get<UserTypeProps>('/users').then(({ data }) => data),
    options,
  );
};

export const getUser = (
  userId: number,
  options?: UseQueryOptions<UserType>,
) => {
  return useQuery(
    createGetUserKey(userId),
    () => api.get<UserType>(`/users/${userId}`).then(({ data }) => data),
    options,
  );
};
