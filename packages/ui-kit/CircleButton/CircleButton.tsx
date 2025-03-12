import { FC, MouseEvent } from 'react';
import cn from 'classnames';

import { Icon } from '../Icon';
import { Icon as IconType } from '../Icon/types';

import { CircleButtonSize } from './types';

import css from './CircleButton.module.scss';

interface CircleButtonProps {
    icon: IconType;
    isDisabled?: boolean;
    isActive?: boolean;
    className?: string;
    label?: string;
    size?: CircleButtonSize;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const CircleButton: FC<CircleButtonProps> = ({
    icon,
    label,
    size = CircleButtonSize.MEDIUM,
    className,
    isDisabled,
    isActive,
    onClick: handleClick,
}) => {
    const handleMouseDown = (e: MouseEvent<HTMLElement>) => e.preventDefault();

    return (
        <button
            className={cn(css.button, className, { [css.active]: isActive })}
            disabled={isDisabled}
            onMouseDown={handleMouseDown}
            onClick={handleClick}
        >
            <span className={cn(css.iconWrap, css[size])}>
                <Icon
                    icon={icon}
                    className={css.icon}
                />
            </span>
            {label && <span className={css.label}>{label}</span>}
        </button>
    );
};

export default CircleButton;
