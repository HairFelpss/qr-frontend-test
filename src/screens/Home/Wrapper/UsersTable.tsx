import React from 'react';

import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';

import { CustomTable } from 'components/Table';
import { UserType } from 'stores/user';

type UsersTableProps = {
  users: UserType[];
};

export const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  const columns: any = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Role',
        accessor: 'job_title',
        Cell: ({ value }: any) => (
          <Box>
            <Text>{value}</Text>
          </Box>
        ),
      },
      {
        Header: 'Document',
        accessor: 'id',
        canSort: false,
        disableSortBy: true,
        Cell: ({ value }: any) => (
          <Box>
            <Text>{value}</Text>
          </Box>
        ),
      },
      {
        Header: 'Admission Date',
        accessor: 'admission_date',
        Cell: ({ value }: any) => (
          <Box>
            <Text>{value}</Text>
          </Box>
        ),
      },
      {
        Header: 'Email',
        accessor: 'email',
        canSort: false,
        disableSortBy: true,
        Cell: ({ value }: any) => (
          <Box>
            <Text>{value}</Text>
          </Box>
        ),
      },
      {
        Header: () => <span style={{ textAlign: 'right' }}>Delete</span>,
        accessor: 'action',
        canSort: false,
        disableSortBy: true,
        Cell: () => (
          <Flex direction="row" justify="flex-end">
            <CloseButton
              size="lg"
              bgColor={useColorModeValue('tomato', 'red.800')}
              color="white"
            />
          </Flex>
        ),
      },
    ],
    [],
  );

  return (
    <Box mt={4} mb={2}>
      <CustomTable
        columns={columns}
        data={users}
        footer
        size="sm"
        variant="striped"
        colorScheme="blue"
      />
    </Box>
  );
};
