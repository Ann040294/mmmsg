import { FC, MouseEvent } from 'react';
import cn from 'classnames';

import { Icon as IconType } from '../../Icon/types';

import css from './DropdownItem.module.scss';

export interface MenuItemProps {
    key: string | number; //обязательно
    icon?: IconType;
    text?: string;
    className?: string;
    onClick?: () => void; //item
    isDisabled?: boolean;
}

const Item: FC<MenuItemProps> = ({
    className,
    isDisabled,
    icon: Icon,
    onClick,
    text,
}) => {
    const handleOnClick = (event: MouseEvent<HTMLLIElement>) => {
        if (isDisabled) {
            event.preventDefault();
        } else if (onClick) onClick();
    };

    return (
        <li
            className={cn(
                css.root,
                className,
                Icon && css.block,
                isDisabled && css.disabled,
            )}
            onClick={handleOnClick}
        >
            {Icon && <Icon />}
            {text}
        </li>
    );
};

export default Item;
