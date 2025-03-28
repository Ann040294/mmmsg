import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import MessageList from '@widgets/MessageList/ui/MessageList';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';
import { HeaderPage } from '@shared/ui/HeaderPage';

import { RIGHT_HEADER_PAGE_BUTTONS } from '../config/configHeaderPage';

const HomePage: FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <title>{t(ROUTE_CONFIG.HOME.title)}</title>
            <HeaderPage
                label={ROUTE_CONFIG.HOME.labelPage}
                rightButtons={RIGHT_HEADER_PAGE_BUTTONS}
            />
            <MessageList />
        </>
    );
};

export default HomePage;
