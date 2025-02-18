import { FC } from 'react';
import cn from 'classnames';

import { Icon } from '../Icon';

import { NoticeTypes, NoticeTypesMap } from './types';

import css from './Notice.module.scss';

interface NoticeProps {
    type: NoticeTypes;
    message: string;
}

const Notice: FC<NoticeProps> = ({ type, message }) => {
    const IconComponent = NoticeTypesMap[type];

    return (
        <div className={cn(css.container, css[type])}>
            <Icon
                icon={IconComponent}
                className={cn(css.icon, css[type])}
            />
            <span className={cn(css.message, css[type])}>{message}</span>
        </div>
    );
};

export default Notice;
