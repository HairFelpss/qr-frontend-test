import React from 'react';

import {
  Box,
  CloseButton,
  Tooltip,
  Flex,
  useColorModeValue,
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
      },
      {
        Header: 'Document',
        accessor: 'id',
        canSort: false,
        disableSortBy: true,
      },
      {
        Header: 'Admission Date',
        accessor: 'admission_date',
      },
      {
        Header: 'Email',
        accessor: 'email',
        canSort: false,
        disableSortBy: true,
        Cell: ({ value }: any) => (
          <Tooltip label={value} fontSize="sm">
            {value.slice(0, 30) + (value.length > 30 ? '...' : '')}
          </Tooltip>
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
