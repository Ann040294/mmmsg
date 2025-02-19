import React, { FC } from 'react';
import cn from 'classnames';

import {ButtonSize, ButtonVariants} from './types';

import css from './Button.module.scss';

export interface ButtonProps {
    text: string;
    variant?: ButtonVariants;
    size?: ButtonSize;
    variant?: Variants;
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({
                                     text,
                                     variant = ButtonVariants.PRIMARY,
                                     size = ButtonSize.MEDIUM
                                     variant = Variants.PRIMARY,
                                     onClick
                                 }) => {
    return (
        <button className={cn(css.button, css[variant], css[size])}>
        <button className={cn(css.button, css[variant])} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
