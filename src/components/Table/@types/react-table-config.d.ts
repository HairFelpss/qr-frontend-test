import {
  UseSortByColumnOptions,
  UseSortByColumnProps,
  UseSortByHooks,
  UseSortByInstanceProps,
  UseSortByOptions,
  UseSortByState,
  UsePaginationState,
  UsePaginationInstanceProps,
  UsePaginationOptions,
  UsePaginationState,
  UseRowStateState,
  UseRowSelectOptions,
  UseRowSelectHooks,
  UseRowSelectState,
  UseRowSelectInstanceProps,
} from 'react-table';

declare module 'react-table' {
  export interface TableOptions<
    D extends Record<string, unknown>,
  > extends UseSortByOptions<D>,
      UseRowSelectOptions<D>,
      UsePaginationOptions<D>,
      // note that having Record here allows you to add anything to the options, this matches the spirit of the
      // underlying js library, but might be cleaner if it's replaced by a more specific type that matches your
      // feature set, this is a safe default.
      Record<string, any> {}

  export interface Hooks<
    D extends Record<string, unknown> = Record<string, unknown>,
  > extends UseSortByHooks<D>,
      UseRowSelectHooks<D> {}

  export interface TableInstance<
    D extends Record<string, unknown> = Record<string, unknown>,
  > extends UseSortByInstanceProps<D>,
      UseRowSelectInstanceProps<D>,
      UsePaginationInstanceProps<D> {}

  export interface TableState<
    D extends Record<string, unknown> = Record<string, unknown>,
  > extends UseSortByState<D>,
      UsePaginationState<D>,
      UseRowSelectState<D>,
      UseRowStateState<D> {}

  export interface ColumnInterface<
    D extends Record<string, unknown> = Record<string, unknown>,
  > extends UseSortByColumnOptions<D> {
    isNumeric?: boolean;
  }

  export interface ColumnInstance<
    D extends Record<string, unknown> = Record<string, unknown>,
  > extends UseSortByColumnProps<D> {
    isNumeric?: boolean;
  }
}
