import { FC } from 'react';
import StopTwoTone from '@ant-design/icons/StopTwoTone';

import Filler from '@shared/ui/Filler/Filler';

import css from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
    return (
        <div className={css.root}>
            <Filler
                hasGradient
                icon={StopTwoTone}
                title={'404'}
                description={'Страничка не найдена :('}
            />
        </div>
    );
};

export default NotFoundPage;
