import React, {ImgHTMLAttributes} from "react";
import {FC} from "react";
import css from "./Avatar.module.scss"
import cn from 'classnames'
import img1 from './img/default.jpg'

export type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
    sizes?: 'small' | 'medium' | 'large',
    shape?: 'square' | 'circle'
};
//TODO: Добавить enum
const Avatar: FC<AvatarProps> = ({
                                     sizes = 'medium',
                                     alt = 'Аватарка', //TODO: Перевод
                                     shape = 'circle',
                                     ...props
                                 }) => {
    return <img
        className={cn(
            props.className,

            shape === 'square' && css.square,
            shape === 'circle' && css.circle,

            sizes === 'small' && css.small,
            sizes === 'medium' && css.medium,
            sizes === 'large' && css.large,
        )}
        src={img1}
        alt={alt}
        {...props}
    />
}
export default Avatar;