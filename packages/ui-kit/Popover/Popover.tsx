import {FC, ReactNode, RefObject, useRef} from 'react';
import cn from 'classnames';

import { Layout } from '../index';

import { isElementAtBottom } from './utils/isElementAtBottom';
import { isElementAtTop } from './utils/isElementAtTop';

import css from './Popover.module.scss';

interface PopoverProps {
    children: ReactNode;
    className?: string;
    isOpen?: boolean;
    ref?: RefObject<HTMLDivElement | null>

}

const Popover: FC<PopoverProps> = (props) => {
    const popoverRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={props.ref} className={css.root}>
            <Layout
                ref={popoverRef}
                className={cn(
                    css.body,
                    props.className,
                    props.isOpen && css.active,

                    isElementAtBottom(popoverRef.current) && !isElementAtTop(popoverRef.current) && css.up,

                    (!isElementAtBottom(popoverRef.current) || (isElementAtBottom(popoverRef.current) && isElementAtTop(popoverRef.current))) && css.bottom,
                )}
            >
                {props.children}
            </Layout>
        </div>
    );
};

export default Popover;
