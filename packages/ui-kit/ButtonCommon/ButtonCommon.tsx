// import React from 'react';
import React, {FC} from "react";
import "./ButtonCommon.scss";
import {ButtonProps} from './type';

const ButtonCommon: React.FC<ButtonProps> = ({text, option = 'primary', className, ...props}) => {

    const buttonClasses = `button button_${option} ${className || ''}`.trim();

    return (
        <button className={buttonClasses}>
            {text}
        </button>
    );
};

export default ButtonCommon;
