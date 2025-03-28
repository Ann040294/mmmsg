import { FC } from 'react';
import { BrowserRouter } from 'react-router';
import { RouteProvider } from '@app/test/RouteContext';
import RouteT from '@app/test/RouteT';

import { HomePage } from '@pages/home';
import Profile from '@pages/profile';
import { LayoutPage } from '@pages/layout';

const AppRouter: FC = () => {
    return (
        <BrowserRouter>
            <RouteProvider>
                <RouteT element={<LayoutPage />}>
                    <RouteT
                        path={'/'}
                        element={<HomePage />}
                    />
                    <RouteT
                        path={'/profile'}
                        element={<Profile />}
                    >
                        <RouteT
                            path={'/profile/settings'}
                            element={<div>Test</div>}
                        />
                    </RouteT>
                </RouteT>
            </RouteProvider>
        </BrowserRouter>
    );
};

export default AppRouter;
