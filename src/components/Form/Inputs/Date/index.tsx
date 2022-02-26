import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { Input, VStack, Text } from '@chakra-ui/react';

type FormDateInputProps = {
  register: UseFormRegister<any>;
  errors: any;
};

export const FormDate: React.FC<FormDateInputProps> = ({
  register,
  errors,
}) => {
  return (
    <VStack align="flex-start">
      <Text>Date</Text>
      <Input
        variant="filled"
        {...register('date', {
          required: `Please enter date`,
          minLength: { value: 1, message: 'Too short' },
        })}
      />
      {errors.date && <p>{errors.date.message}</p>}
    </VStack>
  );
};
