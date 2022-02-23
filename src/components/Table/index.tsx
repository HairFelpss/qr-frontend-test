import React from 'react';

import {
  Table,
  TableProps,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  Button,
  Flex,
  HStack,
  Text,
  Select,
  Box,
} from '@chakra-ui/react';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTable, useSortBy, Column, usePagination } from 'react-table';
import { Scrollbar } from 'components/Scrollbar';

export type DataTableProps<Data extends object> = TableProps & {
  data: Data[];
  columns: Column<Data>[];
  footer: boolean;
};

export function CustomTable<Data extends object>({
  data,
  columns,
  footer,
  ...props
}: DataTableProps<Data>) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    pageOptions,
    pageCount,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
  } = useTable(
    { columns, data, initialState: { pageIndex: 2 } },
    useSortBy,
    usePagination,
  );

  return (
    <>
      <Scrollbar overflowY="auto" maxH="70vh">
        <Table {...getTableProps()} {...props}>
          <Thead
            position="sticky"
            top={0}
            bg={useColorModeValue('white', 'gray.800')}>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}>
                    <HStack align="center">
                      <Text>{column.render('Header')}</Text>
                      {column.isSorted && column.isSortedDesc && (
                        <FaChevronDown aria-label="sorted descending" />
                      )}
                      {column.isSorted && !column.isSortedDesc && (
                        <FaChevronUp aria-label="sorted ascending" />
                      )}
                    </HStack>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row: any) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell: any) => (
                    <Td
                      {...cell.getCellProps()}
                      isNumeric={cell.column.isNumeric}>
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Scrollbar>
      {footer && (
        <Flex direction="row" justify="space-between" align="center" mt={5}>
          <HStack direction="row" align="center" maxW="50%" spacing="5px">
            <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </Button>
            <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {'<'}
            </Button>

            <Button onClick={() => nextPage()} disabled={!canNextPage}>
              {'>'}
            </Button>

            <Button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}>
              {'>>'}
            </Button>
          </HStack>
          <HStack direction="row" justify="space-between" spacing="10px">
            <Box minW="100px">
              <Text fontSize="sm">
                Page{' '}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>
              </Text>
            </Box>
            <Select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}>
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </Select>
          </HStack>
        </Flex>
      )}
    </>
  );
}
