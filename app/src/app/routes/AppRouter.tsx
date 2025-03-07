import { FC, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import ProtectedRoute from '@app/routes/ProtectedRoute';

import { routes } from './routes';

const LayoutPage = lazy(() => import('@pages/layout'));
const HomePage = lazy(() => import('@pages/home'));
const ProfilePage = lazy(() => import('@pages/profile'));
const TestPage = lazy(() => import('@pages/test'));
const LoginPage = lazy(() => import('@pages/login'));
const RegisterPage = lazy(() => import('@pages/register'));
const ResetPage = lazy(() => import('@pages/reset'));
const NotFoundPage = lazy(() => import('@pages/not-found'));

const AppRouter: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={'*'}
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
                        />
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
        </BrowserRouter>
    );
};

export default AppRouter;
