import { FC } from 'react';
import { RouterProvider } from 'react-router';
import { routerForProvider } from '@app/test/routeConfig';

export const AppRouter1: FC = () => {
    return <RouterProvider router={routerForProvider} />;
};
