import { FC } from 'react';
import cn from 'classnames';

import { Icon } from '../Icon';

import { NoticeForm, NoticeTypes, NoticeTypesMap } from './types';

import css from './Notice.module.scss';

interface NoticeProps {
    type: NoticeTypes;
    message: string;
    form?: NoticeForm;
    hasBorder?: boolean;
}

const Notice: FC<NoticeProps> = ({
    type,
    message,
    form = NoticeForm.DEFAULT,
    hasBorder,
}) => {
    const IconComponent = NoticeTypesMap[type];

    return (
        <div
            className={cn(css.container, css[type], css[form], {
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