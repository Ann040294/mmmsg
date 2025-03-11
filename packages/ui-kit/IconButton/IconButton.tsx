import { FC, MouseEvent } from 'react';
import cn from 'classnames';

import { Icon as IconType } from '../Icon/types';

import { IconButtonSize } from './types';

import css from './IconButton.module.scss';

interface IconButtonProps {
    icon: IconType;
    size?: IconButtonSize;
    isDisabled?: boolean;
    className?: string;
    onClick?: () => void;
}

const IconButton: FC<IconButtonProps> = ({
    icon: Icon,
    size = IconButtonSize.MEDIUM,
    className,
    isDisabled,
    onClick,
}) => {
    const handleOnClick = (event: MouseEvent<HTMLElement>) => {
        if (isDisabled) {
            event.preventDefault();

            return;
        }

        onClick?.();
    };

    return (
        <span
            className={cn(css.root, css[size], className, {
                [css.disabled]: isDisabled,
            })}
            onClick={handleOnClick}
        >
            <Icon />
        </span>
    );
};

export default IconButton;
