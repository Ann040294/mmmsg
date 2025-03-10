import { FC } from 'react';
import cn from 'classnames';

import { Icon as IconType } from '../Icon/types';

import css from './IconButton.module.scss';

interface IconButtonProps {
    icon: IconType;
    isDisabled?: boolean;
    className?: string;
    onClick?: () => void;
}

const IconButton: FC<IconButtonProps> = ({
    icon: Icon,
    className,
    onClick: handleClick,
    isDisabled,
}) => {
    return (
        // <span className={css.root}>
        <Icon
            className={cn(className, css.root, { [css.disabled]: isDisabled })}
            // disabled={isDisabled}
            onClick={handleClick}
        />
        // </span>
    );
};

export default IconButton;
