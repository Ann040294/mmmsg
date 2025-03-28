import { FC, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import ProtectedRoute from '@app/routes/ProtectedRoute';

import { routes } from './routes';
import { RouteProvider } from '@app/test/RouteContext';

const LayoutPage = lazy(() => import('@pages/layout/ui'));
// const NestedLayout = lazy(() => import('@pages/nested-layout/ui'));
const HomePage = lazy(() => import('@pages/home/ui'));
const ProfilePage = lazy(() => import('@pages/profile'));
const TestPage = lazy(() => import('@pages/test'));
const LoginPage = lazy(() => import('@pages/login'));
const RegisterPage = lazy(() => import('@pages/register'));
const ResetPage = lazy(() => import('@pages/reset'));
const NotFoundPage = lazy(() => import('@pages/not-found'));

const AppRouter: FC = () => {
    return (
        <BrowserRouter>
            <RouteProvider>
                <Routes>
                    <Route
                        path={routes.not_found.path}
                        element={<NotFoundPage />}
                    />
                    <Route element={<ProtectedRoute />}>
                        <Route element={<LayoutPage />}>
                            <Route
                                path={routes.home.path}
                                element={<HomePage />}
                            />
                            <Route
                                path={routes.profile.path}
                                element={<ProfilePage />}
                            >
                                <Route
                                    path={'settings'}
                                    element={<div>Test1</div>}
                                />
                            </Route>
                        </Route>
                        <Route
                            path={routes.reset.path}
                            element={<ResetPage />}
                        />
                        <Route
                            path={routes.test.path}
                            element={<TestPage />}
                        />
                    </Route>
                    <Route
                        path={routes.login.path}
                        element={<LoginPage />}
                    />
                    <Route
                        path={routes.register.path}
                        element={<RegisterPage />}
                    />
                </Routes>
            </RouteProvider>
        </BrowserRouter>
    );
};

export default AppRouter;
