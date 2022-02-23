import React from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

type ScrollbarProps = BoxProps & {
  children: React.ReactElement | React.ReactElement[];
};

export const Scrollbar: React.FC<ScrollbarProps> = ({ children, ...props }) => (
  <Box
    css={{
      '&::-webkit-scrollbar': {
        width: '20px',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#d6dee1',
        borderRadius: '20px',
        border: '6px solid transparent',
        backgroundClip: 'content-box',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#a8bbbf',
      },
    }}
    {...props}>
    {children}
  </Box>
);
