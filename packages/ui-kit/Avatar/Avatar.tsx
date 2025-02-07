import React, {FC} from "react";
import cn from 'classnames'
import UserOutlined from "@ant-design/icons/UserOutlined";
import {AvatarProps, AvatarShapes, AvatarSizes} from "./types";

import css from "./Avatar.module.scss"


const Avatar: FC<AvatarProps> = ({
                                     size = AvatarSizes.MEDIUM,
                                     alt = 'Аватарка', //TODO: Перевод
                                     shape = AvatarShapes.CIRCLE,
                                     className,
                                     ...props
                                 }) => {

    const classString = cn(
        className,
        css[shape],
        css[size],
        !props.src && css.default
    )

    if (!props.src) {
        return <div className={classString}>
            <UserOutlined/>
        </div>
    }

    return <img
        className={classString}
        alt={alt}
        {...props}
    />
}

export default Avatar;
