import { FC, MouseEvent } from 'react';
import cn from 'classnames';

import { Icon } from '../Icon';
import { Icon as IconType } from '../Icon/types';

import { CircleButtonSize } from './types';

import css from './CircleButton.module.scss';

export interface CircleButtonProps {
    isDisabled?: boolean;
    className?: string;
    icon: IconType;
    label?: string;
    size?: CircleButtonSize;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const CircleButton: FC<CircleButtonProps> = ({
    icon,
    label,
    size = CircleButtonSize.MEDIUM,
    className,
    isDisabled = false,
    onClick: handleClick,
}) => {
    return (
        <button
            className={cn(css.button, className)}
            disabled={isDisabled}
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
