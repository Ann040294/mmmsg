import { getAllCompactMessages } from '@entities/compactMessage/api/getAllCompactMessages';
import { searchCompactMessages } from '@entities/compactMessage/api/searchCompactMessages';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

import { apiSlice } from '@shared/lib/slices/apiSlice';
import { PaginationSettings } from '@shared/lib/utils/getPaginationArray';

export const compactMessageSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCompactMessages: builder.query<
            CompactMessage[],
            { search: string; paginationSettings: PaginationSettings }
        >({
            //TODO: Заменить на query, когда будет backend
            queryFn: async (settings) => {
                if (settings.search === '') {
                    return {
                        data: await getAllCompactMessages(
                            settings.paginationSettings,
                        ),
                    };
                }

                return {
                    data: await searchCompactMessages(
                        settings.search,
                        settings.paginationSettings,
                    ),
                };
            },
            providesTags: ['CompactMessages'],
        }),
    }),
});

export const { useGetCompactMessagesQuery, useLazyGetCompactMessagesQuery } =
    compactMessageSlice;
