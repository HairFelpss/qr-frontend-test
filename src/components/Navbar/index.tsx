import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Center,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from 'components/ColorMode/Switcher';

export default function Nav() {
  return (
    <Box px={4} bg="whiteAlpha.100">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>Logo</Box>

        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <ColorModeSwitcher />

            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}>
                <Avatar
                  size="sm"
                  src="https://avatars.dicebear.com/api/male/username.svg"
                />
              </MenuButton>
              <MenuList alignItems="center" p={2}>
                <Center>
                  <Avatar
                    size="2xl"
                    src="https://avatars.dicebear.com/api/male/username.svg"
                  />
                </Center>
                <Center>
                  <p>Username</p>
                </Center>
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
