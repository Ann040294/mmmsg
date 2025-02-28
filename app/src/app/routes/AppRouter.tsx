import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { HomePage, TestPage } from '../../pages';

import { routes } from './routes';

const AppRouter: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={routes.home.path}
                    element={<HomePage />}
                />
                <Route
                    path={routes.test.path}
                    element={<TestPage />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
