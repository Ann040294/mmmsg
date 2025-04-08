import { FC } from 'react';
import StopTwoTone from '@ant-design/icons/StopTwoTone';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';
import Filler from '@shared/ui/Filler/Filler';

import css from './NotFoundPage.module.scss';

const NOT_FOUND_HTTP_CODE = '404';

const NotFoundPage: FC = () => {
    return (
        <div className={css.root}>
            <Filler
                hasGradient
                hasFish={false}
                icon={StopTwoTone}
                title={NOT_FOUND_HTTP_CODE}
                description={ROUTE_CONFIG.NOT_FOUND.description}
            />
        </div>
    );
};

export default NotFoundPage;
