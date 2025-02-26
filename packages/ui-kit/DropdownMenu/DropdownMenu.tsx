import { FC, ReactNode, useMemo } from 'react';

import { useDetectOutsideClick } from '../hooks/useDetectOutsideClick';
import { useIsOpen } from '../hooks/useIsOpen';
import { EventHandler, useListeners } from '../hooks/useListeners';

import { Popover, PopoverPosition, PopoverSide } from '../Popover';

import { Item, MenuItemProps } from './Item';
import { DropdownTrigger } from './types';

import css from './DropdownMenu.module.scss';

interface DropdownMenuProps {
    options: MenuItemProps[];
    children: ReactNode;
    trigger?: DropdownTrigger;
    position?: PopoverPosition;
    side?: PopoverSide;
}

const DropdownMenu: FC<DropdownMenuProps> = ({
    trigger = DropdownTrigger.CLICK,
    options,
    ...props
}) => {
    const { isOpen, open, toggle, close } = useIsOpen();

    const childrenRef = useDetectOutsideClick<HTMLDivElement | null>(close);

    const createEventHandles = useMemo((): EventHandler[] => {
        if (trigger === DropdownTrigger.CLICK) {
            return [['click', toggle]];
        } else if (trigger === DropdownTrigger.HOVER) {
            return [
                ['mouseenter', open],
                ['mouseleave', close],
            ];
        }

        return [];
    }, [trigger, close, open, toggle]);

    useListeners(childrenRef, createEventHandles);

    return (
        <>
            <div ref={childrenRef}>{props.children}</div>
            <Popover
                position={props.position}
                side={props.side}
                isOpen={isOpen}
                className={css.popover}
                anchorElement={childrenRef.current}
            >
                <ul className={css.list}>
                    {options.map((item) => (
                        <Item
                            {...item}
                            key={item.id}
                        />
                    ))}
                </ul>
            </Popover>
        </>
    );
};
export default DropdownMenu;
