import React from 'react';

import { Box, Button, Flex, Stack, Textarea, VStack } from '@chakra-ui/react';

export const Comments: React.FC = () => (
  <Stack direction={['column', 'row']} border="1px solid black">
    <Box w="90%" pt={4} pl={4}>
      <VStack align="flex-start" spacing={5}>
        <Textarea placeholder="Digite um comentario..." />
        <Textarea placeholder="Here is a sample placeholder" />
        <Textarea placeholder="Here is a sample placeholder" />
      </VStack>
    </Box>
    <Box w="10%" pt={12} pr={2} pl={0}>
      <Flex justify="flex-end">
        <Button>Enviar</Button>
      </Flex>
    </Box>
  </Stack>
);
