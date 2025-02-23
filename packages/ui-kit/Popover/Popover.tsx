import { FC, ReactNode, RefObject, useRef } from 'react';
import cn from 'classnames';

import { Layout } from '../index';

import { isElementAtBottom } from './utils/isElementAtBottom';
import { isElementAtTop } from './utils/isElementAtTop';

import css from './Popover.module.scss';
import { PopoverPosition } from './types';
import { createPortal } from 'react-dom';

interface PopoverProps {
    anchorElement: HTMLElement | null;
    children: ReactNode;
    isDisablePortal?: boolean;
    isOpen?: boolean; // лучше сделать обязательным
    className?: string;
    ref?: RefObject<HTMLDivElement | null>;
    position?: PopoverPosition;
}

const Popover: FC<PopoverProps> = ({
    isDisablePortal = false,
    position = PopoverPosition.BOTTOM,
    ...props
}) => {
    const popoverRef = useRef<HTMLDivElement>(null);

    const isElementTop =
        isElementAtBottom(popoverRef.current) &&
        !isElementAtTop(popoverRef.current);

    const isElementBottom =
        !isElementAtBottom(popoverRef.current) ||
        (isElementAtBottom(popoverRef.current) &&
            isElementAtTop(popoverRef.current));

    const component = (
        <div
            ref={props.ref}
            className={css.root}
        >
            <Layout
                ref={popoverRef}
                className={cn(
                    css.body,
                    css[position],
                    props.className,
                    props.isOpen && css.active,
                    // isElementTop && css.top,
                    // isElementBottom && css.bottom,
                )}
            >
                {props.children}
            </Layout>
        </div>
    );

    if (isDisablePortal || !props.anchorElement) return component;
    else return createPortal(component, props.anchorElement);
};

export default Popover;
