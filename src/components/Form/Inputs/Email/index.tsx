import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { Input, VStack, Text } from '@chakra-ui/react';

type EmailFormProps = {
  register: UseFormRegister<any>;
  errors: any;
};

export const FormEmail: React.FC<EmailFormProps> = ({ register, errors }) => {
  return (
    <VStack align="flex-start">
      <Text>Email</Text>
      <Input
        variant="filled"
        {...register('email', {
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
    </VStack>
  );
};
