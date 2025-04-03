import { FC, useEffect, useState } from 'react';
import { t } from 'i18next';
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';

import { InputVariants } from 'ui-kit';
import Input from 'ui-kit/Input/Input';

import { userMock } from '@entities/user/mock/userMock';
import { User } from '@entities/user/model/user';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';
import { HeaderPage } from '@shared/ui/HeaderPage';
import Spinner from 'ui-kit/Spinner/Spinner';

const ProfilePage: FC = () => {
    const [initialValue, setInitialValue] = useState<User>();

    useEffect(() => {
        setTimeout(() => {
            setInitialValue(userMock);
        }, 3000);
    }, []);

    if (initialValue) {
        return <Spinner />;
    }

    return (
        <>
            <>
                <title>{t(ROUTE_CONFIG.PROFILE.title)}</title>
                <HeaderPage
                    label={t(ROUTE_CONFIG.PROFILE.title)}
                    leftButtons={[{ id: '1', icon: ArrowLeftOutlined }]}
                />
                <form>
                    <Input
                        variant={InputVariants.OUTLINED}
                        placeholder={'Имя'}
                        label={'Имя'}
                        value={initialValue['name']}
                    />
                    <Input
                        variant={InputVariants.OUTLINED}
                        placeholder={'Профессия'}
                        label={'Профессия'}
                        value={initialValue['profession']}
                    />
                    <Input
                        variant={InputVariants.OUTLINED}
                        placeholder={'Телефон'}
                        label={'Телефон'}
                        value={initialValue['phone']}
                    />
                </form>
            </>
        </>
    );
};

export default ProfilePage;
