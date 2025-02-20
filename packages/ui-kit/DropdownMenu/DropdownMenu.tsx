import { FC } from 'react';

import Popover from '../Popover/Popover';

import Item, { MenuItemProps } from './Item/Item';

import css from './DropdownMenu.module.scss';

interface DropdownMenuProps {
    options: MenuItemProps[];
    label?: string;
}

const DropdownMenu: FC<DropdownMenuProps> = ({
    label = 'Click Me',
    ...props
}) => {
    return (
        <Popover
            label={label}
            className={css.root}
        >
            <ul className={css.list}>
                {props.options.map((item, index) => (
                    <Item
                        {...item}
                        key={item.key || index} // Индекс передавать не очень
                    />
                ))}
            </ul>
        </Popover>
    );
};

export default DropdownMenu;
