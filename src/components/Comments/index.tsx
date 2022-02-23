import React from 'react';

import { Box, Button, Flex, Stack, Textarea, VStack } from '@chakra-ui/react';

import { FaTelegramPlane } from 'react-icons/fa';

export const Comments: React.FC = () => (
  <Stack direction={['column', 'row']} border="1px solid black">
    <Box w="90%" pt={4} pl={4}>
      <VStack align="flex-start" spacing={5}>
        <Textarea placeholder="Digite um comentario..." />
      </VStack>
    </Box>
    <Box w="10%" pt={12}>
      <Flex justify="center">
        <Button>
          <FaTelegramPlane />
        </Button>
      </Flex>
    </Box>
  </Stack>
);
