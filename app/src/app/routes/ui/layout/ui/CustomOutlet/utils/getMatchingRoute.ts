import { RouteWithOutlet } from '@app/routes/config/types';

export const getMatchingRoute = (
    locationPathname: string,
    routes: RouteWithOutlet[],
) => {
    const start: string[] = [];
    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];

        if (route.path === locationPathname) {
            start.push(i.toString());
            return { route, start };
        }

        if (route.children) {
            const nestedRoute = getMatchingRoute(
                locationPathname,
                route.children,
            );

            if (nestedRoute) {
                start.push(i.toString());
                start.push('children');
                start.push(...nestedRoute.start);
                return { route: nestedRoute, start };
            }
        }
    }

    return null;
};
