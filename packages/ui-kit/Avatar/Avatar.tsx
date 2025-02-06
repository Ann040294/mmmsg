import React, {ImgHTMLAttributes} from "react";
import {FC} from "react";
import css from "./Avatar.module.scss"
import cn from 'classnames'
import img1 from './img/default.jpg'


export enum AvatarSizes {
    'small',
    'medium',
    'large'
}

export enum AvatarShapes {
    'square',
    'circle'
}

export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'sizes'> {
    sizes?: AvatarSizes,
    shapes?: AvatarShapes
}


const Avatar: FC<AvatarProps> = ({
                                     sizes = AvatarSizes.medium,
                                     alt = 'Аватарка', //TODO: Перевод
                                     shapes = AvatarShapes.circle,
                                     ...props
                                 }) => {
    return <img
        className={cn(
            props.className,

            shapes === AvatarShapes.square && css.img_shape_square,
            shapes === AvatarShapes.circle && css.img_shape_circle,

            sizes === AvatarSizes.small && css.img_size_small,
            sizes === AvatarSizes.medium && css.img_size_medium,
            sizes === AvatarSizes.large && css.img_size_large,
        )}
        src={img1}
        alt={alt}
        {...props}
    />
}

export default Avatar;