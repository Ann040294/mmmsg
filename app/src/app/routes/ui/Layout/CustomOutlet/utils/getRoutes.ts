import lodash from 'lodash';
import { routesConfig } from '@app/routes/config/routes';
import { RouteWithOutlet } from '@app/routes/config/types';

import { getMatchingRoute } from './getMatchingRoute';

export const getRoutes = (paths: string[]): (RouteWithOutlet | null)[] => {
    const outlets: Array<RouteWithOutlet | null> = [];
    const locationInObject: string[] = [];

    paths.forEach((item) => {
        const routes = lodash.get(routesConfig, locationInObject, routesConfig);

        const outlet = getMatchingRoute(
            item,
            Array.isArray(routes) ? routes : [routes],
        );

        if (outlet) {
            locationInObject.push(...outlet.locationInObject);
            outlets.push(outlet.route);
        }
    });

    return outlets;
};
