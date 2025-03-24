import { FC } from 'react';
import cn from 'classnames';

import { Icon } from '../Icon';

import { NoticeTypes, NoticeTypesMap, NoticeVariant } from './types';

import css from './Notice.module.scss';

interface NoticeProps {
    type: NoticeTypes;
    message: string;
    variant?: NoticeVariant;
    hasBorder?: boolean;
}

const Notice: FC<NoticeProps> = ({
    type,
    message,
    variant = NoticeVariant.DEFAULT,
    hasBorder,
}) => {
    const IconComponent = NoticeTypesMap[type];

    return (
        <div
            className={cn(css.container, css[type], css[variant], {
                [css.border]: hasBorder,
            })}
        >
            <Icon
                icon={IconComponent}
                className={css.icon}
            />
            <span className={css.message}>{message}</span>
        </div>
    );
};

export default Notice;
