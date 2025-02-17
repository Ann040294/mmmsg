import React, { FC, useCallback } from 'react';
import cn from 'classnames';

import Notice, { NoticeTypes } from '../Notice';

import { InputVariants } from './types';

import css from './Input.module.scss';

export interface InputProps {
    className?: string;
    label?: string;
    message?: string;
    noticeType?: NoticeTypes;
    variant: InputVariants;
    isDisabled?: boolean;
    placeholder?: string;
    value?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode; //после подключения компонента ICon задать тип Icon. В App задавать иконку без ёлочек
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
    className,
    label,
    message,
    noticeType: validateType,
    variant,
    isDisabled,
    placeholder,
    value,
    onChange,
    iconLeft,
    iconRight,
    ...props
}) => {
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e);
        },
        [onChange],
    );

    //const isError = validateType === NoticeTypes.ERROR && !!message;

    return (
        <div className={cn(css.wrapper, className)}>
            {label && (
                <label
                    className={cn(
                        css.label,
                        !!validateType && css[validateType],
                    )}
                >
                    {label}
                </label>
            )}

            <div className={cn(css.inputWrapper, css[variant])}>
                {iconLeft && <div className={css.icon}>{iconLeft}</div>}

                <input
                    placeholder={placeholder}
                    value={value}
                    disabled={isDisabled}
                    className={cn(
                        css.input,
                        !!validateType && css[validateType],
                    )}
                    onChange={handleChange}
                    {...props}
                />

                {iconRight && <div className={css.icon}>{iconRight}</div>}
            </div>

            {validateType && message && (
                <Notice
                    type={validateType}
                    message={message}
                />
            )}
        </div>
    );
};

export default Input;