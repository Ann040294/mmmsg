import { getAllCompactMessages } from '@entities/compactMessage/api/getAllCompactMessages';
import { searchCompactMessages } from '@entities/compactMessage/api/searchCompactMessages';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

import { apiSlice } from '@shared/lib/slices/apiSlice';
import { PaginationSettings } from '@shared/lib/utils/getPaginationArray';

type QueryConfigType = {
    search: string;
    paginationSettings: PaginationSettings;
};

export const compactMessageSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCompactMessages: builder.query<CompactMessage[], QueryConfigType>({
            //TODO: Заменить на query, когда будет backend
            queryFn: async ({ search, paginationSettings }) => {
                if (search === '') {
                    return {
                        data: await getAllCompactMessages(paginationSettings),
                    };
                }

                return {
                    data: await searchCompactMessages(
                        search,
                        paginationSettings,
                    ),
                };
            },
            providesTags: ['CompactMessages'],
        }),
    }),
});

export const { useGetCompactMessagesQuery, useLazyGetCompactMessagesQuery } =
    compactMessageSlice;
