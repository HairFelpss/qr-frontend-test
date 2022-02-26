import React from 'react';
import { useForm } from 'react-hook-form';

import {
  VStack,
  Button,
  FormControl,
  FormErrorMessage,
  Icon,
  Avatar,
} from '@chakra-ui/react';

import { FiFile } from 'react-icons/fi';

import { FileUpload } from 'components/FileUpload';

type FormData = {
  file: FileList;
};

export const SetAvatar: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const validateFiles = (value: FileList) => {
    if (value.length < 1) {
      return 'Files is required';
    }
    for (const file of Array.from(value)) {
      const fsMb = file.size / (1024 * 1024);
      const MAX_FILE_SIZE = 10;
      if (fsMb > MAX_FILE_SIZE) {
        return 'Max file size 10mb';
      }
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <VStack>
        <FormControl isInvalid={!!errors.file} isRequired>
          <Avatar
            size="2xl"
            name="Avatar"
            src="https://bit.ly/sage-adebayo"
            mb={3}
          />

          <FileUpload
            accept={'image/*'}
            multiple
            register={register('file', { validate: validateFiles })}>
            <Button leftIcon={<Icon as={FiFile} />} type="submit">
              Atualizar
            </Button>
          </FileUpload>

          <FormErrorMessage>
            {errors.file && errors?.file.message}
          </FormErrorMessage>
        </FormControl>
      </VStack>
    </form>
  );
};
