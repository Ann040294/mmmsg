import { FC, lazy } from 'react';
import { useLocation } from 'react-router';
import { getRoutes } from '@app/routes/ui/Layout/CustomOutlet/utils/getRoutes';

import { getRoutePaths } from './utils/getRoutePaths';
import { CustomOutletNames } from './types';

const Filler = lazy(() => import('@shared/ui/Filler/Filler'));

interface CustomOutletProps {
    name: CustomOutletNames;
    NotFoundFilled?: FC;
}

const ROOT_PATH = '/';

const CustomOutlet: FC<CustomOutletProps> = ({
    name,
    NotFoundFilled = Filler,
}) => {
    const location = useLocation();

    let paths: string[] = [ROOT_PATH];

    if (location.pathname !== ROOT_PATH) {
        paths = getRoutePaths(location.pathname);
    }

    const outlets = getRoutes(paths);

    const route = outlets.find((item) => name === item?.outlet);

    if (!route) {
        return <NotFoundFilled />;
    }

    const Component = route.Component;

    if (!Component) {
        return null;
    }

    return <Component />;
};

export default CustomOutlet;
