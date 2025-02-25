import { FC } from 'react';
import cn from 'classnames';

import { Icon } from '../Icon';

import { NoticeForm, NoticeTypes, NoticeTypesMap } from './types';

import css from './Notice.module.scss';

interface NoticeProps {
    type: NoticeTypes;
    message: string;
    form?: NoticeForm;
}

const Notice: FC<NoticeProps> = ({
    type,
    message,
    form = NoticeForm.DEFAULT,
}) => {
    const IconComponent = NoticeTypesMap[type];

    return (
        <div className={cn(css.container, css[type], css[form])}>
            <Icon
                icon={IconComponent}
                className={cn(css.icon, css[form], css[type])}
            />
            <span className={cn(css.message, css[form], css[type])}>
                {message}
            </span>
        </div>
    );
};

export default Notice;
