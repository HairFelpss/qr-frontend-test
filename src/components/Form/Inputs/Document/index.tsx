import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { Input, VStack, Text } from '@chakra-ui/react';

type FormDocumentProps = {
  register: UseFormRegister<any>;
  errors: any;
};

export const FormDocument: React.FC<FormDocumentProps> = ({
  register,
  errors,
}) => {
  return (
    <VStack align="flex-start">
      <Text>Document</Text>
      <Input
        variant="filled"
        {...register('document', {
          required: 'Please enter your Document',
          minLength: { value: 1, message: 'Too short' },
        })}
      />
      {errors.document && <p>{errors.document.message}</p>}
    </VStack>
  );
};
