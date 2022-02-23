import { useQuery, UseQueryOptions } from 'react-query';

import { api } from 'services/Global';

import { UserType } from 'stores/user';

import { createUseUsersKey, createUseUserKey } from './keys';

export const useUsers = (options?: UseQueryOptions<UserType[]>) => {
  return useQuery(
    createUseUsersKey(),
    () => api.get<UserType[]>('/users').then(({ data }) => data),
    options,
  );
};

export const useUser = (
  userId: number,
  options?: UseQueryOptions<UserType[]>,
) => {
  return useQuery(
    createUseUserKey(userId),
    () => api.get<UserType[]>(`/users/${userId}`).then(({ data }) => data),
    options,
  );
};
