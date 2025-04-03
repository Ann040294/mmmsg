import { RouteWithOutlet } from '../types';

export const removePropertyOutlet = (routes: RouteWithOutlet[]) => {
    return routes.map((route) => {
        const { outlet, ...rest } = route;

        if (rest.children) {
            rest.children = removePropertyOutlet(rest.children);
        }

        return rest;
    });
};
