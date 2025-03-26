import { FC, lazy } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router';
import ProtectedRoute from '@app/routes/ProtectedRoute';

import NestedLayout from '@pages/layout/ui/NestedLayout/NestedLayout';

import { routes } from './routes';

const LayoutPage = lazy(() => import('@pages/layout/ui/L1'));
const HomePage = lazy(() => import('@pages/home/ui'));
const ProfilePage = lazy(() => import('@pages/profile'));

const AppRouter: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route element={<LayoutPage />}>
                        <Route
                            path={routes.home.path}
                            element={
                                <NestedLayout>
                                    <HomePage />
                                </NestedLayout>
                            }
                        />
                        <Route
                            path={routes.profile.path}
                            element={
                                <NestedLayout>
                                    <ProfilePage />
                                </NestedLayout>
                            }
                        >
                            <Route
                                path={'settings'}
                                element={
                                    <NestedLayout>
                                        <div>SETTINGS</div>
                                    </NestedLayout>
                                }
                            >
                                <Route
                                    path={'set1'}
                                    element={
                                        <div>
                                            Test1
                                            <Outlet />
                                        </div>
                                    }
                                >
                                    <Route
                                        path={'set3'}
                                        element={
                                            <div>
                                                Test111
                                                <Outlet />
                                            </div>
                                        }
                                    />
                                </Route>
                            </Route>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
