import { getUser, updateUserInfo } from '@entities/user/api/user';
import { User } from '@entities/user/model/user';

import { apiSlice } from '@shared/lib/slices/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<User, void>({
            queryFn: async () => {
                /*TODO: Когда будет back заменить на query*/
                return { data: await getUser() };
            },
            providesTags: ['User'],
        }),
        updateUser: builder.mutation<User, User>({
            /*TODO: Когда будет back заменить на query*/
            queryFn: async () => {
                return { data: await updateUserInfo() };
            },
        }),
    }),
});

export const { useGetUserQuery, useLazyGetUserQuery, useUpdateUserMutation } =
    userApiSlice;
