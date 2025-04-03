import { FC, lazy, ReactNode } from 'react';
import { useLocation } from 'react-router';
import { getRoutes } from '@app/routes/ui/Layout/CustomOutlet/utils/getRoutes';

import { getRoutePaths } from './utils/getRoutePaths';
import { CustomOutletNames } from './types';

const NotFoundPage = lazy(() => import('@pages/not-found')); //TODO: Заменить на компонент по макету, когда появится

interface CustomOutletProps {
    name: CustomOutletNames;
    NotFoundFilled?: ReactNode;
}

const ROOT_PATH = '/';

const CustomOutlet: FC<CustomOutletProps> = ({
    name,
    NotFoundFilled = <NotFoundPage />,
}) => {
    const location = useLocation();

    let paths: string[] = [ROOT_PATH];

    if (location.pathname !== ROOT_PATH) {
        paths = getRoutePaths(location.pathname);
    }

    const outlets = getRoutes(paths);

    const route = outlets.find((item) => name === item?.outlet);

    if (!route) {
        return NotFoundFilled;
    }

    const Component = route.Component;

    if (!Component) {
        return null;
    }

    return <Component />;
};

export default CustomOutlet;
