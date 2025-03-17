import { FC } from 'react';
import { Outlet } from 'react-router';

const ProtectedRoute: FC = () => {
    return <Outlet />;
};

export default ProtectedRoute;
