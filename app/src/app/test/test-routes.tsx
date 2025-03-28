import { ReactNode } from 'react';

import { HomePage } from '@pages/home';
import Login from '@pages/login';
import NotFound from '@pages/not-found';
import Profile from '@pages/profile';

type routes1 = {
    path: string;
    outlets: { [key: string]: ReactNode };
};

export const routes1: routes1[] = [
    {
        path: '/',
        outlets: {
            main: <HomePage />,
            second: <NotFound />,
        },
    },
    {
        path: '/profile',
        outlets: {
            main: <Profile />,
            second: <NotFound />,
        },
    },
    {
        path: '/profile/settings',
        outlets: {
            main: <Profile />,
            second: <Login />,
        },
    },
];
