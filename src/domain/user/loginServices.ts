import {fetcher} from '../../utils/fetcher';

export type LoginPayload = {email: string; password: string};

export const login = async (payload: LoginPayload) => {
  const response = await fetcher.post('login', payload);
  return response;
};
