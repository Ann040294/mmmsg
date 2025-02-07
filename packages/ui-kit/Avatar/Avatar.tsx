import React, {FC} from "react";
import css from "./Avatar.module.scss"
import cn from 'classnames'
import {AvatarProps, AvatarShapes, AvatarSizes} from "./types";
import {UserOutlined} from "@ant-design/icons";
import defaultAvatar from './img/default.jpg'


const Avatar: FC<AvatarProps> = ({
                                     size = AvatarSizes.medium,
                                     alt = 'Аватарка', //TODO: Перевод
                                     shape = AvatarShapes.circle,
                                     className,
                                     ...props
                                 }) => {
    const classString = cn(
        className,
        css[shape],
        css[size],
        !props.src && css.default
    )

    return (
        <>
            {
                props.src ?
                    <img
                        className={classString}
                        src={defaultAvatar}
                        alt={alt}
                        {...props}
                    /> :
                    <div className={classString}>
                        <UserOutlined/>
                    </div>
            }
        </>
    )

}

export default Avatar;
