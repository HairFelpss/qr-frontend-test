import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { Input, VStack, Text } from '@chakra-ui/react';

type FormTextAreaProps = {
  register: UseFormRegister<any>;
  errors: any;
  type: string;
  required: string;
  title: string;
};

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  register,
  errors,
  type,
  required,
  title,
}) => {
  return (
    <VStack align="flex-start">
      <Text>{title}</Text>
      <Input
        variant="filled"
        {...register(type, {
          required: `Please enter ${required}`,
          minLength: { value: 1, message: 'Too short' },
        })}
      />
      {errors[type] && <p>{errors[type].message}</p>}
    </VStack>
  );
};
