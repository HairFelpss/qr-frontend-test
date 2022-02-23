import React from 'react';

import { Avatar, Flex, useColorModeValue, Text } from '@chakra-ui/react';

interface ICard {
  title: string;
  comments?: string;
  date: string;
  name: string;
}

export const Card: React.FC<ICard> = ({ title, comments, date, name }) => (
  <Flex
    boxShadow="2xl"
    maxW="640px"
    direction={{ base: 'column-reverse', md: 'row' }}
    width="full"
    rounded="xl"
    p={10}
    justifyContent="space-between"
    position="relative"
    bg={useColorModeValue('white', 'gray.800')}>
    <Avatar
      src="https://bit.ly/sage-adebayo"
      height="80px"
      width="80px"
      alignSelf="center"
      m={{ base: '0 35px 0 0', md: '0 50px 0 0' }}
    />
    <Flex direction="column" textAlign="left" justifyContent="space-between">
      <Text fontWeight="bold" fontSize="lg">
        {name}
      </Text>
      {comments && (
        <Text fontWeight="medium" fontSize="md" mt={4}>
          {comments}
        </Text>
      )}

      <Flex direction="row" justifyContent="space-between" mt={4}>
        <Text fontWeight="bold" fontSize="sm" textAlign="left">
          {title}
        </Text>

        <Text fontWeight="bold" fontSize="sm" textAlign="right">
          {date}
        </Text>
      </Flex>
    </Flex>
  </Flex>
);
