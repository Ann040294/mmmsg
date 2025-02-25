import { FC, ReactNode, RefObject, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { Layout } from '../index';

import { PopoverPosition, PopoverSide } from './types';

import css from './Popover.module.scss';

interface PopoverProps {
    isOpen: boolean;
    anchorElement: HTMLElement | null;
    children: ReactNode;
    isDisablePortal?: boolean;
    className?: string;
    ref?: RefObject<HTMLDivElement | null>;
    position?: PopoverPosition;
    side?: PopoverSide;
}

const Popover: FC<PopoverProps> = ({
    isDisablePortal = false,
    position = PopoverPosition.BOTTOM,
    side = PopoverSide.CENTER,
    ...props
}) => {

    const popoverRef = useRef<HTMLDivElement>(null);

    const getAnchorElementSizes = useMemo(() => {
        if (props.anchorElement) {
            const { height, width } =
                props.anchorElement.getBoundingClientRect();

            return [height, width];
        }

        return [0, 0];
    }, [props.anchorElement]);

    const component = (
        <div
            ref={props.ref}
            className={css.root}
        >
            <Layout
                ref={popoverRef}
                style={{
                    '--sizeH': getAnchorElementSizes[0] + 'px',
                    '--sizeW': getAnchorElementSizes[1] + 'px',
                }}
                className={cn(
                    css.body,
                    css[position],
                    css[side],
                    props.className,
                    props.isOpen && css.active,
                )}
            >
                {props.children}
            </Layout>
        </div>
    );

    if (isDisablePortal || !props.anchorElement) {
        return component;
    } else {
        return createPortal(component, props.anchorElement);
    }
};

export default Popover;
