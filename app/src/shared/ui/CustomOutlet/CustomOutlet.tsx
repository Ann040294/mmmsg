import { FC, lazy } from 'react';
import { useLocation } from 'react-router';
import { routeConfig, RouteWithOutlet } from '@app/test/routeConfig';

import { getMatchingRoute } from '@shared/ui/CustomOutlet/utils/getMatchingRoute';

const NotFoundPage = lazy(() => import('@pages/not-found')); //TODO: Заменить на компонент по макету, когда появится

interface CustomOutletProps {
    name: string;
    NotFoundRoute?: FC;
}

const CustomOutlet: FC<CustomOutletProps> = ({
    name,
    NotFoundRoute = NotFoundPage,
}) => {
    const location = useLocation();

    const outlets: Array<RouteWithOutlet | null> = [];

    let paths: string[] = [];

    if (location.pathname !== '/') {
        paths = location.pathname.split('/').filter((item) => item !== '');
    } else {
        paths = ['/'];
    }

    paths.forEach((item) => {
        outlets.push(getMatchingRoute(item, routeConfig));
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
