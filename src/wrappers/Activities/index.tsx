import React from 'react';

import { Box, Text } from '@chakra-ui/react';

import { Card } from 'components/Card';

export const Activities: React.FC = () => (
  <Box height="100%" p={2}>
    <Text fontSize="lg" fontWeight="bold" color="black" pb={2}>
      Atividades
    </Text>
    <Card
      title="Foto Atualizada"
      date="10/05/2021"
      comments="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    />
  </Box>
);
