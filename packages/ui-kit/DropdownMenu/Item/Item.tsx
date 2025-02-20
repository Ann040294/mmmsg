import { FC } from 'react';
import cn from 'classnames';

import { Icon as IconType } from '../../Icon/types';

import css from './DropdownItem.module.scss';

export interface MenuItemProps {
    key: string | number;
    icon?: IconType;
    text?: string;
    className?: string;
    onClick?: () => void;
    isDisabled?: boolean;
}

const Item: FC<MenuItemProps> = ({
    className,
    isDisabled,
    icon: Icon,
    ...props
}) => {
    return (
        <li
            className={cn(
                css.root,
                className,
                Icon && css.block,
                isDisabled && css.disabled,
            )}
            {...props}
        >
            {Icon && <Icon />}
            {props.text}
        </li>
    );
};

export default Item;
