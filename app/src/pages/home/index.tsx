import { FC } from 'react';

import MessageList from '@widgets/MessageList/ui/MessageList';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';

const HomePage: FC = () => {
    return (
        <>
            <title>{ROUTE_CONFIG.HOME.title}</title>
            <div>Чаты</div>
            <MessageList />
        </>
    );
};

export default HomePage;
