import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouteWithOutlet } from '@app/routes/config/types';
import { removePropertyOutlet } from '@app/routes/config/utils/removePropertyOutlet';
import ProtectedRoute from '@app/routes/ProtectedRoute';
import { CustomOutletNames } from '@app/routes/ui/Layout/CustomOutlet/types';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';

const Layout = lazy(() => import('@app/routes/ui/Layout'));
const HomePage = lazy(() => import('@pages/home/ui'));
const ProfilePage = lazy(() => import('@pages/profile/ui'));
const TestPage = lazy(() => import('@pages/test'));
const LoginPage = lazy(() => import('@pages/login'));
const RegisterPage = lazy(() => import('@pages/register'));
const ResetPage = lazy(() => import('@pages/reset'));
const NotFoundPage = lazy(() => import('@pages/not-found'));
const SettingsPage = lazy(() => import('@pages/settings'));

export const routesConfig: RouteWithOutlet[] = [
    {
        Component: ProtectedRoute,
        children: [
            {
                Component: Layout,
                children: [
                    {
                        path: ROUTE_CONFIG.HOME.path,
                        Component: HomePage,
                        outlet: CustomOutletNames.FIRST,
                    },
                    {
                        path: ROUTE_CONFIG.PROFILE.path,
                        Component: ProfilePage,
                        outlet: CustomOutletNames.FIRST,
                        children: [
                            {
                                path: ROUTE_CONFIG.PROFILE.children.SETTINGS
                                    .path,
                                Component: SettingsPage,
                                outlet: CustomOutletNames.SECOND,
                            },
                        ],
                    },
                ],
            },
            {
                path: ROUTE_CONFIG.RESET.path,
                Component: ResetPage,
            },
            {
                path: ROUTE_CONFIG.TEST.path,
                Component: TestPage,
            },
        ],
    },
    {
        path: ROUTE_CONFIG.LOGIN.path,
        Component: LoginPage,
    },
    {
        path: ROUTE_CONFIG.REGISTER.path,
        Component: RegisterPage,
    },
    {
        path: ROUTE_CONFIG.NOT_FOUND.path,
        Component: NotFoundPage,
    },
];

export const router = createBrowserRouter(removePropertyOutlet(routesConfig));
