import { FC, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import ProtectedRoute from '@app/routes/ProtectedRoute';

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
                            element={<HomePage />}
                        />
                        <Route path="/profile/*">
                            <Route
                                index
                                element={<ProfilePage />}
                            />
                            <Route
                                path="settings"
                                element={<div>Test</div>}
                            />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
