import React from 'react';
import { Box, Stack, Avatar, Text, Flex, VStack } from '@chakra-ui/react';

interface ICard {
  title: string;
  comments?: string;
  date: string;
}

export const Card: React.FC<ICard> = ({ title, comments, date }) => (
  <Box
    bg="white"
    color="black"
    w="100%"
    textAlign="left"
    border="1px solid black"
    pt={4}
    pr={4}
    pl={4}>
    <Stack direction={['column', 'row']}>
      <Avatar
        size="2xl"
        name="Segun Adebayo"
        src="https://bit.ly/sage-adebayo"
      />
      <Box w="100%">
        {!comments && (
          <Flex
            direction="column"
            align="center"
            justify="center"
            height="100%">
            <Text fontSize="lg" fontWeight="bold" textAlign="center">
              {title}
            </Text>
          </Flex>
        )}
        {comments && (
          <VStack height="100%">
            <Box>
              <Text fontSize="lg" fontWeight="bold" textAlign="left">
                Foto Atualizada
              </Text>
            </Box>
            <Box p={2}>
              <Text fontSize="md" textAlign="left">
                {comments}
              </Text>
            </Box>
          </VStack>
        )}
      </Box>
    </Stack>
    <Text fontSize="sm" fontWeight="bold" textAlign="right" pt={2} pb={1}>
      {date}
    </Text>
  </Box>
);
