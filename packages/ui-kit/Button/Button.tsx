import React, {FC} from "react";
import cn from 'classnames'
import {ButtonProps, ButtonVariants} from './types';

import css from "./ButtonCommon.module.scss"

const Button:FC<ButtonProps> = ({
                                          text,
                                          variant = ButtonVariants.PRIMARY,
                                          ...props}) => {

    const buttonClasses = cn(
        `${css.button}
        ${css[variant]}`);

    return (
        <button className={buttonClasses}>
            {text}
        </button>
    );
};

export default Button;
