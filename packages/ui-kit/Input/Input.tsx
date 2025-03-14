import React, { FC, useCallback } from 'react';
import cn from 'classnames';

import { Icon } from '../Icon/types';
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
    iconLeft?: Icon;
    iconRight?: Icon;
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
    iconLeft: IconLeftComponent,
    iconRight: IconRightComponent,
    ...props
}) => {
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e);
        },
        [onChange],
    );

    return (
        <div
            className={cn(css.wrapper, className, {
                [css.error]: validateType === NoticeTypes.ERROR,
            })}
        >
            {label && <label className={cn(css.label)}>{label}</label>}

            <div
                className={cn(
                    css.inputWrapper,
                    css[variant],
                    !!validateType && css[validateType],
                )}
            >
                {IconLeftComponent && <IconLeftComponent />}

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

                {IconRightComponent && <IconRightComponent />}
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
