import { FC, useRef } from 'react';
import cn from 'classnames';

import Popover from '../Popover/Popover';

import Item, { MenuItemProps } from './Item/Item';

import css from './DropdownMenu.module.scss';

interface DropdownMenuProps {
    options: MenuItemProps[];
}

const DropdownMenu: FC<DropdownMenuProps> = (props) => {

    return (
        <Popover label={'Example'}>
            <ul
                className={css.list}
            >
                {props.options.map((item, index) => (
                    <Item
                        key={index}
                        className={css.item}
                        text={item.text}
                        icon={item.icon}
                        onClick={item.onClick}
                    />
                ))}
            </ul>
        </Popover>
    );
};

export default DropdownMenu;
