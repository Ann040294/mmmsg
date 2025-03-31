import { FC, lazy } from 'react';
import { useLocation } from 'react-router';
import { routesConfig } from '@app/routes/config/routes';
import { RouteWithOutlet } from '@app/routes/config/types';
import { CustomOutletNames } from '@app/routes/ui/layout/ui/CustomOutlet/types';

import { getMatchingRoute } from './utils/getMatchingRoute';
import { getRouterPaths } from './utils/getRouterPaths';

const NotFoundPage = lazy(() => import('@pages/not-found')); //TODO: Заменить на компонент по макету, когда появится

interface CustomOutletProps {
    name: CustomOutletNames;
    NotFoundFilled?: FC;
}

const ROOT_PATH = '/';

const CustomOutlet: FC<CustomOutletProps> = ({
    name,
    NotFoundFilled = NotFoundPage,
}) => {
    const location = useLocation();

    const outlets: Array<RouteWithOutlet | null> = [];

    let paths: string[] = [ROOT_PATH];

    if (location.pathname !== ROOT_PATH) {
        paths = getRouterPaths(location.pathname);
    }

    paths.forEach((item) => {
        const outlet = getMatchingRoute(item, routesConfig);
        console.log(outlet);
        outlets.push(outlet.route);
    });

    for (let i = 0; i < paths.length; i++) {
        const outlet = getMatchingRoute(paths[i], routesConfig);
        outlets.push(outlet.route);
    }

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
