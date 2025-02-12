import React, { FC } from 'react';
import cn from 'classnames';
import {
    CameraOutlined,
    PaperClipOutlined,
    SearchOutlined,
} from '@ant-design/icons';

import Message from '../Message';

import { InputProps } from './types';

import css from './input.module.scss';

const Input: FC<InputProps> = ({
    className,
    label,
    hasError,
    message,
    variant = 'text',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isRequired,
    isDisabled,
    placeholder,
    value,
    onChange,
    ...props
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };

    return (
        <div className={cn(css.wrapper, className)}>
            {label && variant !== 'search' && variant !== 'message' && (
                <label className={cn(css.label, { [css.error]: hasError })}>
                    {label}
                </label>
            )}

            <div className={cn(css.inputWrapper)}>
                {variant === 'search' && (
                    <SearchOutlined className={css.iconLeft} />
                )}

                {variant === 'message' && (
                    <PaperClipOutlined className={css.iconLeft} />
                )}

                <input
                    placeholder={placeholder}
                    value={value}
                    disabled={isDisabled}
                    className={cn(css.input, {
                        [css.searchInput]: variant === 'search',
                        [css.messageInput]: variant === 'message',
                        [css.error]: hasError,
                    })}
                    onChange={handleChange}
                    {...props}
                />

                {variant === 'message' && (
                    <CameraOutlined className={css.iconRight} />
                )}
            </div>

            {hasError && message && (
                <Message
                    type="error"
                    message={message}
                />
            )}
        </div>
    );
};

export default Input;
