import { RouteWithOutlet } from '@app/routes/config/types';

type ResultGetMatchingRoute = {
    route: RouteWithOutlet;
    locationInObject: string[];
};
export const getMatchingRoute = (
    locationPathname: string,
    routes: RouteWithOutlet[],
): ResultGetMatchingRoute | null => {
    const locationInObject: string[] = [];

    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];

        if (route.path === locationPathname) {
            locationInObject.push(i.toString());

            return { route, locationInObject };
        }

        if (route.children) {
            const nestedRoute = getMatchingRoute(
                locationPathname,
                route.children,
            );

            if (nestedRoute) {
                locationInObject.push(i.toString());
                locationInObject.push('children');
                locationInObject.push(...nestedRoute.locationInObject);

                return {
                    route: nestedRoute.route,
                    locationInObject,
                };
            }
        }
    }

    return null;
};
