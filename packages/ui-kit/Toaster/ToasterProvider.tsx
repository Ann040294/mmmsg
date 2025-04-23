import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { NoticeTypes } from '../Notice';

import Toast, { ToastOptions } from './Toast';

import styles from './Toaster.module.scss';

interface ToasterContextValue {
    push: (opts: Omit<ToastOptions, 'id'>) => void;
}

interface ToasterProviderProps {
    children: React.ReactNode;
}

// 1. Контекст
const ToasterContext = createContext<ToasterContextValue | null>(null);

// 2. Провайдер
export const ToasterProvider: React.FC<ToasterProviderProps> = ({
    children,
}) => {
    const [toasts, setToasts] = useState<ToastOptions[]>([]);

    const push = useCallback((opts: Omit<ToastOptions, 'id'>) => {
        const id = uuid();
        setToasts((prev) => [...prev, { ...opts, id }]);
    }, []);

    const remove = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToasterContext.Provider value={{ push }}>
            {children}
            <div className={styles.toasterContainer}>
                {toasts.map((t) => {
                    const handleDismiss = () => remove(t.id);

                    return (
                        <Toast
                            key={t.id}
                            {...t}
                            onDismiss={handleDismiss}
                        />
                    );
                })}
            </div>
        </ToasterContext.Provider>
    );
};

// 3. Хук для доступа
export function useToaster() {
    const ctx = useContext(ToasterContext);
    if (!ctx) {
        throw new Error('useToaster must be inside ToasterProvider');
    }

    return {
        success: (
            msg: string,
            opts?: Partial<Omit<ToastOptions, 'type' | 'message'>>,
        ) =>
            ctx.push({
                type: NoticeTypes.SUCCESS,
                message: msg,
                duration: 3000,
                ...opts,
            }),
        error: (
            msg: string,
            opts?: Partial<Omit<ToastOptions, 'type' | 'message'>>,
        ) =>
            ctx.push({
                type: NoticeTypes.ERROR,
                message: msg,
                duration: 5000,
                ...opts,
            }),
        info: (
            msg: string,
            opts?: Partial<Omit<ToastOptions, 'type' | 'message'>>,
        ) =>
            ctx.push({
                type: NoticeTypes.INFO,
                message: msg,
                duration: 4000,
                ...opts,
            }),
    };
}

// 4. Дефолтный экспорт провайдера
export default ToasterProvider;
