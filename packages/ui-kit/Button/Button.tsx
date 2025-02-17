import React, { FC } from 'react';
import cn from 'classnames';
import { Variants } from './types';

import css from './Button.module.scss';

export interface ButtonProps {
    text: string;
    variant?: Variants;
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({
                                     text,
                                     variant = Variants.PRIMARY,
                                     onClick,
                                     ...props
                                 }) => {
    return (
        <button className={cn(css.button, css[variant])} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
