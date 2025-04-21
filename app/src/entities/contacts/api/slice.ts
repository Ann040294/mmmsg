import { getAllContacts } from '@entities/contacts/api/contacts';
import { Contact } from '@entities/contacts/model/contact';

import { apiSlice } from '@shared/lib/slices/apiSlice';
import { PaginationSettings } from '@shared/lib/utils/getPaginationArray';

export const contactsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllContacts: builder.query<Contact[], PaginationSettings>({
            queryFn: async ({ page, maxSize }) => ({
                data: await getAllContacts({
                    page,
                    maxSize,
                }),
            }),
            providesTags: ['Contacts'],
        }),
    }),
});

export const { useGetAllContactsQuery, useLazyGetAllContactsQuery } =
    contactsApiSlice;
