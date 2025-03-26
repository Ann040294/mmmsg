import { FC, lazy } from 'react';
import {
    BrowserRouter,
    Outlet,
    Route,
    Routes,
    useLocation,
} from 'react-router';
import ProtectedRoute from '@app/routes/ProtectedRoute';

import { routes } from './routes';

const LayoutPage = lazy(() => import('@pages/layout/ui/L3'));
const HomePage = lazy(() => import('@pages/home/ui'));
const ProfilePage = lazy(() => import('@pages/profile'));
const TestPage = lazy(() => import('@pages/test'));
const LoginPage = lazy(() => import('@pages/login'));
const RegisterPage = lazy(() => import('@pages/register'));
const ResetPage = lazy(() => import('@pages/reset'));
const NotFoundPage = lazy(() => import('@pages/not-found'));

const AppRouter: FC = () => {
    // const location = useLocation();
    return (
        <BrowserRouter>
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
                            key={routes.profile.path}
                            path={routes.profile.path}
                            element={[
                                // <ProfilePage key={'423432f'} />,
                                // <div
                                //     key={'423434f'}
                                //     style={{ border: '1px solid black' }}
                                // >
                                //     Test
                                // </div>,
                                <div
                                    key={'423435f'}
                                    route={'settings'}
                                >
                                    FOR SETTINGS
                                    {window.location.pathname.includes(
                                        'settings',
                                    ) && <Outlet />}
                                </div>,
                                <div>
                                    {window.location.pathname.includes(
                                        'set1',
                                    ) && <Outlet />}
                                </div>,
                            ]}
                            // element={<ProfilePage />}
                        >
                            <Route
                                path={'settings'}
                                element={
                                    <div>
                                        ID SETTINGS <Outlet />
                                    </div>
                                }
                            >
                                <Route
                                    path={'set1'}
                                    element={<div>ID SET1</div>}
                                />
                            </Route>
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
        </BrowserRouter>
    );
};

export default AppRouter;
