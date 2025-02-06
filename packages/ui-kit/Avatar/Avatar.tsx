import React, {ImgHTMLAttributes} from "react";
import {FC} from "react";
import css from "./Avatar.module.scss"
import cn from 'classnames'
import img1 from './img/default.jpg'


export enum SizesAvatar {
    'small',
    'medium',
    'large'
}

export enum ShapeAvatar {
    'square',
    'circle'
}

export type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
    sizes?: SizesAvatar,
    shape?: ShapeAvatar
};


const Avatar: FC<AvatarProps> = ({
                                     sizes = SizesAvatar.medium,
                                     alt = 'Аватарка', //TODO: Перевод
                                     shape = ShapeAvatar.circle,
                                     ...props
                                 }) => {
    return <img
        className={cn(
            props.className,

            shape === ShapeAvatar.square && css.img_shape_square,
            shape === ShapeAvatar.circle && css.img_shape_circle,

            sizes === SizesAvatar.small && css.img_size_small,
            sizes === SizesAvatar.medium && css.img_size_medium,
            sizes === SizesAvatar.large && css.img_size_large,
        )}
        src={img1}
        alt={alt}
        {...props}
    />
}

export default Avatar;