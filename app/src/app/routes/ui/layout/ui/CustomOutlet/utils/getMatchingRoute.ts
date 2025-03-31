import { RouteWithOutlet } from '@app/routes/config/types';

export const getMatchingRoute = (
    locationPathname: string,
    routes: RouteWithOutlet[],
): RouteWithOutlet | null => {
    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];

        if (route.path === locationPathname) {
            return route;
        }

        if (route.children) {
            const nestedRoute = getMatchingRoute(
                locationPathname,
                route.children,
            );

            if (nestedRoute) {
                return nestedRoute;
            }
        }
    }

    return null;
};
