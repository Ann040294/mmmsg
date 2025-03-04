import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { HomePage, LayoutPage, ProfilePage, TestPage } from '@pages/index';

import { routes } from './routes';

const AppRouter: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
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
                path={routes.test.path}
                element={<TestPage />}
            />
        </Routes>
</BrowserRouter>
)
    ;
};

export default AppRouter;
