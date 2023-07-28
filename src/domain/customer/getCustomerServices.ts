import {fetcher} from '../../utils/fetcher';
export type GetCustomerPayload = {
  page?: number;
};
export const getCustomer = async (payload: GetCustomerPayload) => {
  const response = await fetcher.get(`users?page=${payload.page}`);
  return response.data;
};
