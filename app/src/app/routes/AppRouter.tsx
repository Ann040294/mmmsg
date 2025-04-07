import { FC } from 'react';
import { RouterProvider } from 'react-router';
import { router } from '@app/routes/config/routes';

const AppRouter: FC = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
