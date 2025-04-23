import React, { useEffect } from 'react';

//import cn from 'classnames';
import Notice, { NoticeTypes, NoticeVariant } from '../Notice';

import styles from './Toaster.module.scss';

export interface ToastOptions {
    id: string;
    type: NoticeTypes;
    message: string;
    duration?: number;
    variant?: NoticeVariant;
    hasBorder?: boolean;
}

export interface ToastProps extends ToastOptions {
    onDismiss: () => void;
}

const Toast: React.FC<ToastProps> = ({
    id,
    type,
    message,
    duration = 3000,
    variant,
    hasBorder,
    onDismiss: handleDismiss,
}) => {
    useEffect(() => {
        const timer = setTimeout(handleDismiss, duration);

        return () => clearTimeout(timer);
    }, [id, duration, handleDismiss]);

    return (
        <div className={styles.toastWrapper}>
            <Notice
                type={type}
                message={message}
                variant={variant ?? NoticeVariant.TOASTER}
                hasBorder={hasBorder}
            />
            <button
                className={styles.closeBtn}
                aria-label="Close toast"
                onClick={handleDismiss}
            >
                ×
            </button>
        </div>
    );
};

export default Toast;
