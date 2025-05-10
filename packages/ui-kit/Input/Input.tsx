import React, {
    FC,
    HTMLInputTypeAttribute,
    useCallback,
    useState,
} from 'react';
import cn from 'classnames';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

import { Icon } from '../Icon/types';
import Notice, { NoticeTypes } from '../Notice';

import { InputVariants } from './types';

import css from './Input.module.scss';

export interface InputProps {
    type?: HTMLInputTypeAttribute;
    name?: string;
    isRequired?: boolean;
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
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
    name,
    type = 'text',
    isRequired,
    className,
    label,
    message,
    noticeType: validateType,
    variant,
    isDisabled,
    placeholder,
    value,
    onChange,
    onFocus: handleFocus,
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

    const [showPassword, setShowPassword] = useState(false);

    const isPasswordField = type === 'password';

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const inputType = isPasswordField && showPassword ? 'text' : type;

    return (
        <div className={cn(css.wrapper, className, css[validateType!])}>
            {label && (
                <label
                    htmlFor={name}
                    className={cn(css.label, css[validateType!])}
                >
                    {label}
                </label>
            )}

            <div
                className={cn(
                    css.inputWrapper,
                    css[variant],
                    !!validateType && css[validateType],
                )}
            >
                {IconLeftComponent && <IconLeftComponent />}

                <input
                    name={name}
                    type={inputType}
                    required={isRequired}
                    placeholder={placeholder}
                    value={value}
                    disabled={isDisabled}
                    className={cn(
                        css.input,
                        !!validateType && css[validateType],
                    )}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    {...props}
                />

                {isPasswordField && !IconRightComponent && (
                    <span
                        className={css.eyeIcon}
                        onClick={handleTogglePassword}
                    >
                        {showPassword ? (
                            <EyeOutlined />
                        ) : (
                            <EyeInvisibleOutlined />
                        )}
                    </span>
                )}

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
