import React, { FC, MouseEvent } from 'react';
import cn from 'classnames';
import UserOutlined from '@ant-design/icons/UserOutlined';

import { AvatarShapes, AvatarSizes } from './types';

import css from './Avatar.module.scss';

interface AvatarProps {
    size?: AvatarSizes;
    shape?: AvatarShapes;
    className?: string;
    src?: string;
    alt?: string;
    srcSet?: string;
    onClick?: (event: MouseEvent<HTMLImageElement>) => void;
}

const Avatar: FC<AvatarProps> = ({
    size = AvatarSizes.MEDIUM,
    alt = 'Аватарка',
    shape = AvatarShapes.CIRCLE,
    className,
    ...props
}) => {
    const classString = cn(
        className,
        css[shape],
        css[size],
        !props.src && css.default,
    );

    if (!props.src) {
        return (
            <div className={classString}>
                <UserOutlined />
            </div>
        );
    }

    return (
        <img
            className={classString}
            alt={alt}
            {...props}
        />
    );
};

export default Avatar;
