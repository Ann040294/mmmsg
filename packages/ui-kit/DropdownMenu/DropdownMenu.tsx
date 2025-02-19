import { FC, useRef, useState } from 'react';
import cn from 'classnames';

import { Layout } from '../index';

import Item, { MenuItemProps } from './Item/Item';
import { DropdownMenuTrigger } from './types';

import css from './DropdownMenu.module.scss';

interface DropdownMenuProps {
    options: MenuItemProps[];
    trigger?: DropdownMenuTrigger;
}

const DropdownMenu: FC<DropdownMenuProps> = (props) => {
    const dropdownRef = useRef<HTMLUListElement>(null);
    // const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
    const [isActive, setIsActive] = useState<boolean>(false);
    const onClick = () => setIsActive((prevState) => !prevState);

    // function isElementAtBottom(element) {
    //     if (element.current) {
    //         console.log(element);
    //         const rect = element.current.getBoundingClientRect();
    //         const bottom = rect.bottom;
    //         const viewportHeight = window.innerHeight;
    //
    //         console.log(rect);
    //         console.log(viewportHeight);
    //
    //         return bottom >= viewportHeight;
    //     }
    //
    //     return null;
    // }

    return (
        <div className={css.root}>
            <button
                className={css.menuTrigger}
                onClick={onClick}
            >
                Example
            </button>
            <Layout
                className={cn(
                    css.menu,
                    isActive && css.active,
                    // isElementAtBottom(dropdownRef) ? css.up : css.bottom,
                )}
            >
                <ul
                    ref={dropdownRef}
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
            </Layout>
        </div>
    );
};

export default DropdownMenu;
