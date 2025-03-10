import { FC } from 'react';
import cn from 'classnames';

import { Icon as IconType } from '../Icon/types';

import { IconButtonSize } from './types';

import css from './IconButton.module.scss';

interface IconButtonProps {
    icon: IconType;
    size: IconButtonSize;
    isDisabled?: boolean;
    className?: string;
    onClick?: () => void;
}

const IconButton: FC<IconButtonProps> = ({
    icon: Icon,
    size = IconButtonSize.MEDIUM,
    className,
    onClick: handleClick,
    isDisabled,
}) => {
    return (
        <span
            className={cn(css.root, css[size], className,  {
                [css.disabled]: isDisabled,
            })}
        >
            <Icon onClick={handleClick} />
        </span>
    );
};

export default IconButton;
