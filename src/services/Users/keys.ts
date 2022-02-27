import { QueryKey } from 'react-query';

export const createGetAllUsersKey = (): QueryKey => ['getAllUsers'];

export const createGetUserKey = (userId: number): QueryKey => [
  'getUser',
  userId,
];

export const createPostUserKey = (): QueryKey => ['postUser'];
