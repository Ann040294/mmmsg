import React, { FC } from 'react';
import cn from 'classnames';

import { ButtonSize, ButtonVariants } from './types';

import css from './Button.module.scss';

export interface ButtonProps {
    text: string;
    variant?: ButtonVariants;
    size?: ButtonSize;
    isFullWidth?: boolean;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
    text,
    variant = ButtonVariants.PRIMARY,
    size = ButtonSize.MEDIUM,
    isFullWidth = false,
    onClick: handleClick,
}) => {
    return (
        <button
            className={cn(css.button, css[variant], css[size], {
                [css.fullWidth]: isFullWidth,
            })}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default Button;
