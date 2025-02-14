import React, { FC } from 'react';
import cn from 'classnames';
import {
    CheckCircleOutlined,
    CloseOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons';

//прямой import
import { NoticeProps } from './types';

import css from './Notice.module.scss';

//отказаться от этой реализации
const iconMap = {
    error: <CloseOutlined className={cn(css.icon, css.error)} />,
    success: <CheckCircleOutlined className={cn(css.icon, css.success)} />,
    info: <ExclamationCircleOutlined className={cn(css.icon, css.info)} />,
};

//вынести в отдельный фойл
const iconMap2: Record<NoticeProps['type'], typeof CloseOutlined> = {
    error: CloseOutlined,
    success: CheckCircleOutlined,
    info: ExclamationCircleOutlined,
};

const Message: FC<NoticeProps> = ({ type, message }) => {
    const icon = iconMap[type];
    const IconType = iconMap2[type];

    return (
        <div className={cn(css.container, css[type])}>
            {icon}
            <IconType className={cn(css.icon, css[type])} />
            <span className={css.message}>{message}</span>
        </div>
    );
};

export default Message;
