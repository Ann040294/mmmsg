import { FC } from 'react';
import { t } from 'i18next';
import StopTwoTone from '@ant-design/icons/StopTwoTone';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';
import Filler from '@shared/ui/Filler/Filler';

import css from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
    return (
        <div className={css.root}>
            <Filler
                hasGradient
                hasLoader={false}
                icon={StopTwoTone}
                title={t(ROUTE_CONFIG.NOT_FOUND.labelPage)}
                description={t('notFound.description')}
            />
        </div>
    );
};

export default NotFoundPage;
