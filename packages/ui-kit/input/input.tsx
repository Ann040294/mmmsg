import React, { FC, useCallback } from 'react';
import cn from 'classnames';

import { IconType } from '../Icon/types';
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
    iconLeft?: IconType;
    iconRight?: IconType;
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

    const isError = validateType === NoticeTypes.ERROR;

    return (
        <div className={cn(css.wrapper, className)}>
            {label && <label className={cn(css.label)}>{label}</label>}

            <div
                className={cn(css.inputWrapper, css[variant], {
                    [css.error]: isError,
                })}
            >
                {iconLeft && React.createElement(iconLeft)}

                <input
                    placeholder={placeholder}
                    value={value}
                    disabled={isDisabled}
                    className={cn(css.input, { [css.error]: isError })}
                    onChange={handleChange}
                    {...props}
                />

                {iconRight && React.createElement(iconRight)}
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
