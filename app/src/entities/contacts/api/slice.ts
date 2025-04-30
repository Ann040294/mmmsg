import {
    addContact,
    getAllContacts,
    searchContacts,
} from '@entities/contacts/api/contacts';
import { Contact } from '@entities/contacts/model/contact';

import { apiSlice } from '@shared/lib/slices/apiSlice';
import { PaginationSettings } from '@shared/lib/utils/getPaginationArray';

type QueryConfigType = {
    search: string;
    paginationSettings: PaginationSettings;
};

export const contactsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllContacts: builder.query<Contact[], QueryConfigType>({
            queryFn: async ({ search, paginationSettings }) => {
                if (search === '') {
                    return {
                        data: await getAllContacts(paginationSettings),
                    };
                }

                return {
                    data: await searchContacts(search, paginationSettings),
                };
            },
            providesTags: ['Contacts'],
        }),
        addContact: builder.mutation<Contact, { ip: string }>({
            queryFn: async ({ ip }) => {
                return { data: await addContact(ip) };
            },
        }),
    }),
});

export const {
    useGetAllContactsQuery,
    useLazyGetAllContactsQuery,
    useAddContactMutation,
} = contactsApiSlice;
