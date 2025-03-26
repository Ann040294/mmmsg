import { FC, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import ProtectedRoute from '@app/routes/ProtectedRoute';
import NamedRoute from '@app/routes/Test/NamedRoute';

import { routes } from './routes';

const LayoutPage = lazy(() => import('@pages/layout/ui/L2'));
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
                                <NamedRoute
                                    outlets={[
                                        {
                                            name: 'left',
                                            content: <HomePage />,
                                        },
                                    ]}
                                />
                            }
                        />
                        <Route
                            path={routes.profile.path}
                            element={
                                <NamedRoute
                                    outlets={[
                                        {
                                            name: 'left',
                                            content: <ProfilePage />,
                                        },
                                        {
                                            name: 'right',
                                            content: <div>Test</div>,
                                        },
                                    ]}
                                />
                            }
                        >
                            {/*<Route*/}
                            {/*    path={'settings'}*/}
                            {/*    element={<div>Test</div>}*/}
                            {/*/>*/}
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
