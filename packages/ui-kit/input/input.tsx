import React, { FC, useCallback } from 'react';
import cn from 'classnames';

import Notice from '../Notice';

import { InputVariants } from './types';

import css from './Input.module.scss';

export interface InputProps {
    className?: string;
    label?: string;
    hasError?: boolean;
    message?: string;
    variant: InputVariants;
    isRequired?: boolean;
    isDisabled?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
    className,
    label,
    hasError,
    message,
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

    return (
        //частично перенести стили из input в input wrapper(он будет главенствующий)
        <div className={cn(css.wrapper, className)}>
            {!!label && <label className={cn(css.label)}>{label}</label>}
            <div className={cn(css.inputWrapper, css[variant])}>
                {iconLeft && (
                    <span className={cn(css.icon, css.left)}>{iconLeft}</span>
                )}

                <input
                    placeholder={placeholder}
                    value={value}
                    disabled={isDisabled}
                    className={cn(css.input, {
                        [css.error]: hasError,
                        //уходим, так как стили в inputWrapper. Уходим от .right и .left
                        [css.hasIconLeft]: iconLeft,
                        [css.hasIconRight]: iconRight,
                    })}
                    onChange={handleChange}
                    {...props}
                />
                {iconRight && (
                    <span className={cn(css.icon, css.right)}>{iconRight}</span>
                )}
            </div>
            {hasError && !!message && (
                <Notice
                    type="error"
                    message={message}
                />
            )}
        </div>
    );
};

export default Input;
