// lib/graphql-request.ts
import { api } from './index';

export const graphqlRequest = async <TData = any, TVariables = {}>(
  query: string,
  variables?: TVariables
): Promise<TData> => {
  const res = await api.post('', {
    query,
    variables,
  });
  return res.data; 
};
