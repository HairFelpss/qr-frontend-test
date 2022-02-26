import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { Input, VStack, Text } from '@chakra-ui/react';

type FormSearchProps = {
  register: UseFormRegister<any>;
  errors: any;
};

export const FormSearch: React.FC<FormSearchProps> = ({ register, errors }) => {
  return (
    <VStack align="flex-start">
      <Text>Search</Text>
      <Input variant="filled" {...register('search')} />
      {errors.search && <p>{errors.search.message}</p>}
    </VStack>
  );
};
