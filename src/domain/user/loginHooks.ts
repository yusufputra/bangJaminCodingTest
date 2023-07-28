import {UseMutationOptions, useMutation} from 'react-query';
import {LoginPayload, login} from './loginServices';

export const useLogin = (
  options?: UseMutationOptions<unknown, unknown, LoginPayload>,
) => {
  return useMutation(payload => login(payload), options);
};
