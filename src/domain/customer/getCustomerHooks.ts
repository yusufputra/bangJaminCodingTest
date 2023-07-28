import {getCustomer} from './getCustomerServices';
import {useInfiniteQuery, UseInfiniteQueryOptions} from 'react-query';

export type Customer = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type CustomerResponse = {
  page: number;
  total_pages: number;
  data: Array<Customer>;
};

export const useGetCustomer = (
  options?: UseInfiniteQueryOptions<
    CustomerResponse,
    unknown,
    CustomerResponse,
    CustomerResponse,
    'customer'
  >,
) => {
  return useInfiniteQuery(
    'customer',
    ({pageParam = 1}) => getCustomer({page: pageParam}),
    {
      ...options,
      keepPreviousData: true,
      getNextPageParam: lastpage => {
        const {page, total_pages} = lastpage;

        if (page < total_pages) {
          return page + 1;
        }
      },
    },
  );
};
