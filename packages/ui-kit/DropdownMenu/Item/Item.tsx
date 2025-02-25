import { FC, MouseEvent } from 'react';
import cn from 'classnames';

import { Icon as IconType } from '../../Icon/types';

import css from './DropdownItem.module.scss';

export interface MenuItemProps {
    id: string | number;
    icon?: IconType;
    text?: string;
    className?: string;
    onClick?: (item: MenuItemCompactType) => void;
    isDisabled?: boolean;
}

export type MenuItemCompactType = Pick<MenuItemProps, 'id' | 'text'>;

const Item: FC<MenuItemProps> = ({
    className,
    isDisabled,
    icon: Icon,
    onClick,
    ...item
}) => {


    const handleOnClick = (event: MouseEvent<HTMLLIElement>) => {
        if (isDisabled) {
            event.preventDefault();
        } else if (onClick) onClick(item);
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
            {item.text}
        </li>
    );
};

export default Item;
