import lodash from 'lodash';
import { routesConfig } from '@app/routes/config/routes';
import { RouteWithOutlet } from '@app/routes/config/types';

import { getMatchingRoute } from './getMatchingRoute';

export const getRoutes = (paths: string[]): (RouteWithOutlet | null)[] => {
    const outlets: (RouteWithOutlet | null)[] = [];
    const pathProperty: string[] = [];

    paths.forEach((item) => {
        const routes = lodash.get(routesConfig, pathProperty, routesConfig);

        const outlet = getMatchingRoute(
            item,
            Array.isArray(routes) ? routes : [routes],
        );

        if (outlet) {
            pathProperty.push(...outlet.pathProperty);
            outlets.push(outlet.route);
        }
    });

    return outlets;
};
