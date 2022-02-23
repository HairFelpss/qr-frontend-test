import { QueryKey } from 'react-query';

export const createUseUsersKey = (): QueryKey => ['useUsers'];

export const createUseUserKey = (userId: number): QueryKey => [
  'useUsers',
  userId,
];
