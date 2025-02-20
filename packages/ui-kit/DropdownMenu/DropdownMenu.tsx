import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import Popover from '../Popover/Popover';

import Item, { MenuItemProps } from './Item/Item';
import { DropdownTrigger } from './types';

import css from './DropdownMenu.module.scss';
import useDetectOutsideClick from '../hooks/useDetectOutsideClick';

interface DropdownMenuProps {
    options: MenuItemProps[];
    children?: ReactNode;
    trigger?: DropdownTrigger;
}

const DropdownMenu: FC<DropdownMenuProps> = ({
    trigger = DropdownTrigger.CLICK,
    ...props
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOnClick = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const handleOnHoverOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    const handleOnHoverClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const childrenRef = useDetectOutsideClick<HTMLDivElement>(handleOnClick);
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (childrenRef.current) {
            switch (trigger) {
                case DropdownTrigger.CLICK: {
                    childrenRef.current.addEventListener(
                        'click',
                        handleOnClick,
                    );
                    break;
                }
                case DropdownTrigger.HOVER: {
                    childrenRef.current.addEventListener(
                        'mouseenter',
                        handleOnHoverOpen,
                    );
                    popoverRef.current?.addEventListener(
                        'mouseenter',
                        handleOnHoverOpen,
                    );
                    childrenRef.current.addEventListener(
                        'mouseleave',
                        handleOnHoverClose,
                    );
                    popoverRef.current?.addEventListener(
                        'mouseleave',
                        handleOnHoverClose,
                    );
                    break;
                }
                default:
                    break;
            }

            return () => {
                childrenRef.current?.removeEventListener(
                    'click',
                    handleOnClick,
                );
                childrenRef.current?.removeEventListener(
                    'mouseenter',
                    handleOnHoverOpen,
                );
                childrenRef.current?.removeEventListener(
                    'mouseleave',
                    handleOnHoverClose,
                );
                popoverRef.current?.removeEventListener(
                    'mouseenter',
                    handleOnHoverOpen,
                );
                popoverRef.current?.removeEventListener(
                    'mouseleave',
                    handleOnHoverClose,
                );
            };
        }
    });

    return (
        <>
            <div ref={childrenRef}>{props.children}</div>
            <Popover
                ref={popoverRef}
                isOpen={isOpen}
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
        </>
    );
};
export default DropdownMenu;
