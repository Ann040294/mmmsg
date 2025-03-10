import { FC } from 'react';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';

const HomePage: FC = () => {
    return (
        <>
            <title>{ROUTE_CONFIG.HOME.title}</title>
            <div>Чаты</div>
        </>
    );
};

export default HomePage;
