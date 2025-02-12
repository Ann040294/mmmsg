import React from 'react';
import cn from 'classnames';
import {
    CheckCircleOutlined,
    CloseOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons';

import css from './message.module.scss';

interface MessageProps {
    type?: 'error' | 'info' | 'success';
    message: string;
}

const Message: React.FC<MessageProps> = ({ type = 'error', message }) => {
    const icons = {
        error: <CloseOutlined className={cn(css.icon, css.error)} />,
        success: <CheckCircleOutlined className={cn(css.icon, css.success)} />,
        info: <ExclamationCircleOutlined className={cn(css.icon, css.info)} />,
    };

    const icon = icons[type] || icons.error;

    return (
        <div className={cn(css.messageContainer, css[type])}>
            {icon}
            <span className={css.message}>{message}</span>
        </div>
    );
};

export default Message;
