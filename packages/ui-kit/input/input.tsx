import React, { FC, useCallback } from 'react';
import cn from 'classnames';

import Notice from '../Notice';

import { InputProps } from './types';

import css from './Input.module.scss';

const Input: FC<InputProps> = ({
    className,
    label,
    hasError,
    message,
    variant = 'inputWithLabel',
    isDisabled,
    placeholder,
    value,
    onChange,
    iconLeft,
    iconRight,
    ...props
}) => {
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    }, [onChange]);
    
    const inputClasses = cn(css.input, css[variant], {
        [css.inputWithLabel]: variant === 'inputWithLabel', // --
        [css.fullfield]: variant === 'fullfield', //--
        [css.error]: hasError,
        [css.hasIconLeft]: iconLeft,
        [css.hasIconRight]: iconRight,
    });

    return (
        <div className={cn(css.wrapper, className)}>
            {label && variant === 'inputWithLabel' && ( // -variant
                <label className={cn(css.label, { [css.error]: hasError })}>
                    {label}
                </label>
            )}

            <div className={cn(css.inputWrapper)}>
                {iconLeft && (
                    <span className={cn(css.icon, css.left)}>{iconLeft}</span>
                )}

                <input
                    placeholder={placeholder}
                    value={value}
                    disabled={isDisabled}
                    className={inputClasses} //cn
                    onChange={handleChange}
                    {...props}
                />

                {iconRight && (
                    <span className={cn(css.icon, css.right)}>{iconRight}</span>
                )}
            </div>

            {hasError && message && (
                <Notice
                    type="error"
                    message={message}
                />
            )}
        </div>
    );
};

export default Input;
