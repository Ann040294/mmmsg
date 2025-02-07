// import React from 'react';
import React, {FC} from "react";
import "./ButtonCommon.scss";
import {ButtonHTMLAttributes} from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    option?: 'primary' | 'secondary';
};

const ButtonCommon: React.FC<ButtonProps> = ({text, option = 'primary', className, ...props}) => {

    const buttonClasses = `button button_${option} ${className || ''}`.trim();

    return (
        <button className={buttonClasses}>
            {text}
        </button>
    );
};

export default ButtonCommon;
