import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router';
import ProtectedRoute from '@app/routes/ProtectedRoute';
import { routes } from '@app/routes/routes';

const LayoutPage = lazy(() => import('@pages/layout/ui'));
const HomePage = lazy(() => import('@pages/home/ui'));
const ProfilePage = lazy(() => import('@pages/profile'));
const TestPage = lazy(() => import('@pages/test'));
const LoginPage = lazy(() => import('@pages/login'));
const RegisterPage = lazy(() => import('@pages/register'));
const ResetPage = lazy(() => import('@pages/reset'));
const NotFoundPage = lazy(() => import('@pages/not-found'));

export type RouteWithOutlet = RouteObject & {
    outlet?: string;
    children?: RouteWithOutlet[];
};

const removeOutlets = (routes: RouteWithOutlet[]) => {
    return routes.map((route) => {
        const { outlet, ...rest } = route;

        if (rest.children) {
            rest.children = removeOutlets(rest.children);
        }

        return rest;
    });
};

export const routeConfig: RouteWithOutlet[] = [
    {
        Component: ProtectedRoute,
        children: [
            {
                path: '',
                Component: LayoutPage,
                children: [
                    {
                        path: '/',
                        Component: HomePage,
                        outlet: 'main',
                    },
                    {
                        path: routes.profile.path,
                        Component: ProfilePage,
                        outlet: 'main',
                        children: [
                            {
                                path: 'settings',
                                Component: NotFoundPage,
                                outlet: 'second',
                            },
                        ],
                    },
                ],
            },
            {
                path: routes.reset.path,
                Component: ResetPage,
            },
            {
                path: routes.test.path,
                Component: TestPage,
            },
        ],
    },
    {
        path: routes.login.path,
        Component: LoginPage,
    },
    {
        path: routes.register.path,
        Component: RegisterPage,
    },
    {
        path: routes.not_found.path,
        Component: NotFoundPage,
    },
];

export const routerForProvider = createBrowserRouter(
    removeOutlets(routeConfig),
);
