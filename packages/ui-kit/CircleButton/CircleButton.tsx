import { FC } from 'react';
import cn from 'classnames';

import { Icon } from '../Icon';
import { Icon as IconType } from '../Icon/types';

import { CircleButtonSize } from './types';

import css from './CircleButton.module.scss';

export interface CircleButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: IconType;
    label?: string;
    size?: CircleButtonSize;
}

const CircleButton: FC<CircleButtonProps> = ({
    icon,
    label,
    size = CircleButtonSize.MEDIUM,
    className,
    ...props
}) => {
    return (
        <button
            className={cn(css.button, css[size], className)}
            {...props}
        >
            <span className={css.icon}>
                <Icon icon={icon} />
            </span>
            {label && <span className={css.label}>{label}</span>}
        </button>
    );
};

export default CircleButton;
