import React, {FC} from 'react';
import cn from 'classnames';

import {Variants} from './types';

import css from './Button.module.scss';

export interface ButtonProps {
    text: string;
    variant?: Variants;
    handleClick: () => void;
}

const Button: FC<ButtonProps> = ({
                                     text,
                                     variant = Variants.PRIMARY,
                                     handleClick
                                 }) => {
    return (
        <button className={cn(css.button, css[variant])} onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;
