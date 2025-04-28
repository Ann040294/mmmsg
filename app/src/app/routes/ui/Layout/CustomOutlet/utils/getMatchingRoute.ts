import { matchPath } from 'react-router';
import { RouteWithOutlet } from '@app/routes/config/types';

type ResultGetMatchingRoute = {
    route: RouteWithOutlet;
    pathProperty: string[];
};

export const getMatchingRoute = (
    locationPathname: string,
    routes: RouteWithOutlet[],
): ResultGetMatchingRoute | null => {
    const pathProperty: string[] = [];

    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];

        if (route.path) {
            const match = matchPath(route.path, locationPathname);

            if (match?.pathname === locationPathname) {
                pathProperty.push(i.toString());

                return { route, pathProperty };
            }
        }

        if (route.children) {
            const nestedRoute = getMatchingRoute(
                locationPathname,
                route.children,
            );

            if (nestedRoute) {
                pathProperty.push(i.toString());
                pathProperty.push('children');
                pathProperty.push(...nestedRoute.pathProperty);

                return {
                    route: nestedRoute.route,
                    pathProperty,
                };
            }
        }
    }

    return null;
};
