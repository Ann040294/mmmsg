import React, { FC } from 'react';
import cn from 'classnames';
import { Variants } from './types';

import css from './Button.module.scss';

export interface ButtonProps {
    text: string;
    variant?: Variants;
}

const Button: FC<ButtonProps> = ({
                                     text,
                                     variant = Variants.PRIMARY,
                                     ...props
                                 }) => {
    return (
        <button className={cn(css.button, css[variant])}>
            {text}
        </button>
    );
};

export default Button;
