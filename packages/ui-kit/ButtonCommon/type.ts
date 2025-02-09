import {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
    text: string;
    option?: 'primary' | 'secondary';
}