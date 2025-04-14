import { FC } from 'react';
import { t } from 'i18next';
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';

import ProfileForm from '@pages/profile/ui/ProfileForm/ProfileForm';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';
import { HeaderPage } from '@shared/ui/HeaderPage';

const ProfilePage: FC = () => {
    return (
        <>
            <title>{t(ROUTE_CONFIG.PROFILE.title)}</title>
            <HeaderPage
                label={t(ROUTE_CONFIG.PROFILE.title)}
                leftButtons={[{ id: '1', icon: ArrowLeftOutlined }]}
            />
            <ProfileForm />
        </>
    );
};

export default ProfilePage;
