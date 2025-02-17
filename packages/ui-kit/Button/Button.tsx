import React, { FC } from 'react';
import cn from 'classnames';

import {ButtonSize, ButtonVariants} from './types';

import css from './Button.module.scss';

export interface ButtonProps {
    text: string;
    variant?: ButtonVariants;
    size?: ButtonSize;
}

const Button: FC<ButtonProps> = ({
                                     text,
                                     variant = ButtonVariants.PRIMARY,
                                     size = ButtonSize.MEDIUM
                                 }) => {
    return (
        <button className={cn(css.button, css[variant], css[size])}>
            {text}
        </button>
    );
};

export default Button;
