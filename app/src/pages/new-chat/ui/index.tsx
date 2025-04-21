import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { RIGHT_HEADER_NEW_CHAT_PAGE_BUTTONS } from '@pages/new-chat/config/configHeaderPage';

import ProfileList from '@widgets/ProfileList/ui/ProfileList';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';
import { HeaderPage } from '@shared/ui/HeaderPage';

const NewChatPage: FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <title>{t(ROUTE_CONFIG.NEW_CHAT.title)}</title>
            <HeaderPage
                label={ROUTE_CONFIG.NEW_CHAT.labelPage}
                rightButtons={RIGHT_HEADER_NEW_CHAT_PAGE_BUTTONS}
            />
            <ProfileList />
        </>
    );
};

export default NewChatPage;
