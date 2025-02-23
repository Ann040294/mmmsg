import { FC, ReactNode } from 'react';

import useDetectOutsideClick from '../hooks/useDetectOutsideClick';
import { useIsOpen } from '../hooks/useIsOpen';
import { EventHandlerPair, useListeners } from '../hooks/useListeners';
import Popover from '../Popover/Popover';
import { PopoverPosition } from '../Popover/types';

import Item, { MenuItemProps } from './Item/Item';
import { DropdownTrigger } from './types';

import css from './DropdownMenu.module.scss';

interface DropdownMenuProps {
    options: MenuItemProps[];
    children?: ReactNode;
    trigger?: DropdownTrigger;
    position?: PopoverPosition;
}

const DropdownMenu: FC<DropdownMenuProps> = ({
    trigger = DropdownTrigger.CLICK,
    ...props
}) => {
    const { isOpen, open, toggle, close } = useIsOpen();

    const childrenRef = useDetectOutsideClick<HTMLDivElement | null>(close);

    const createEventPairs = (): EventHandlerPair[] => {
        if (trigger === DropdownTrigger.CLICK) return [['click', toggle]];
        else if (trigger === DropdownTrigger.HOVER)
            return [
                ['mouseenter', open],
                ['mouseleave', close],
            ];

        return [];
    };

    useListeners(childrenRef, createEventPairs());

    return (
        <div
            ref={childrenRef}
            className={css.root}
        >
            <div style={{ height: '100%' }}>{props.children}</div>
            <Popover
                position={props.position}
                isOpen={isOpen}
                className={css.popover}
                anchorElement={childrenRef.current}
            >
                <ul className={css.list}>
                    {props.options.map((item, index) => (
                        <Item
                            {...item}
                            key={item.key || index}
                        />
                    ))}
                </ul>
            </Popover>
        </div>
    );
};
export default DropdownMenu;
