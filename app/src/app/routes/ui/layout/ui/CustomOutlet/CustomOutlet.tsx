import { FC, lazy } from 'react';
import { useLocation } from 'react-router';
import { routesConfig } from '@app/routes/config/routes';
import { RouteWithOutlet } from '@app/routes/config/types';
import { CustomOutletNames } from '@app/routes/ui/layout/ui/CustomOutlet/types';

import { getMatchingRoute } from './utils/getMatchingRoute';

const NotFoundPage = lazy(() => import('@pages/not-found')); //TODO: Заменить на компонент по макету, когда появится

interface CustomOutletProps {
    name: CustomOutletNames;
    NotFoundRoute?: FC;
}

const CustomOutlet: FC<CustomOutletProps> = ({
    name,
    NotFoundRoute = NotFoundPage,
}) => {
    const location = useLocation();

    const outlets: Array<RouteWithOutlet | null> = [];

    let paths: string[] = [];

    if (location.pathname === '/') {
        paths = ['/'];
    } else {
        paths = location.pathname.split('/').filter((item) => item !== '');
    }

    paths.forEach((item) => {
        outlets.push(getMatchingRoute(item, routesConfig));
    });

    const route = outlets.find((item) => name === item?.outlet);

    if (!route) {
        return <NotFoundRoute />;
    }

    const Component = route.Component;

    if (!Component) {
        return null;
    }

    return <Component />;
};

export default CustomOutlet;
