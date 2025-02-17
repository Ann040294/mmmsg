import { FC, MouseEvent, useCallback, useState } from 'react';
import cn from 'classnames';
import IconUserOutlined from '@ant-design/icons/UserOutlined';

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
    const [hasError, setHasError] = useState<boolean>(false);

    const handleOnError = useCallback(() => {
        setHasError(true);
    }, [setHasError]);

    const classString = cn(
        className,
        css[shape],
        css[size],
        (!props.src || hasError) && css.default,
    );

    if (!props.src || hasError) {
        return (
            <div className={classString}>
                <IconUserOutlined />
            </div>
        );
    }

    return (
        <img
            className={classString}
            alt={alt}
            onError={handleOnError}
            {...props}
        />
    );
};

export default Avatar;
