import { type QueryConfig } from '@/lib/react-query'
import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query'
import { graphqlRequest } from '@/lib/axios/graphql'
import type { GetCharactersResponse } from '@/types';
import { GET_CHARACTERS } from './gql/queries';

const getCharacters = async ({ pageParam = 1 }) => {
    const res = await graphqlRequest<GetCharactersResponse>(GET_CHARACTERS, {
        page: pageParam,
    });
    return res

};
export const getInfiniteCharactersQueryOptions = () => {
    return infiniteQueryOptions({
        queryKey: ['characters'],
        queryFn: ({ pageParam = 1 }) => {
            return getCharacters({ pageParam: pageParam as number });
        },
        getNextPageParam: (lastPage) => {
            if (lastPage?.characters.info.prev === lastPage?.characters.info?.count) return undefined;
            const nextPage = lastPage?.characters.info.next;
            return nextPage;
        },
        initialPageParam: 1,
    });
};

type UseCharactersOptions = {
    page?: number;
    queryConfig?: QueryConfig<typeof getCharacters>;
};

export const useInfiniteCharacters = ({ }: UseCharactersOptions) => {
    return useInfiniteQuery({
        ...getInfiniteCharactersQueryOptions(),
    });
};