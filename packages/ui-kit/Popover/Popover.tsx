import { FC, ReactNode, useRef, useState } from 'react';
import cn from 'classnames';

import { Layout } from '../index';

import { isElementAtBottom } from './utils/isElementAtBottom';
import { PopoverTrigger } from './types';

import css from './Popover.module.scss';

interface PopoverProps {
    children: ReactNode;
    label?: string;
    trigger?: PopoverTrigger;
    className?: string;
}

const Popover: FC<PopoverProps> = (props) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const handleOnTrigger = () => setIsActive((prevState) => !prevState);

    return (
        <div className={css.root}>
            <button onClick={handleOnTrigger}>{props.label}</button>
            {/*TODO: Button заменить*/}
            <Layout
                ref={dropdownRef}
                className={cn(
                    css.body,
                    props.className,
                    isActive && css.active,
                    isElementAtBottom(dropdownRef.current) //лучше без тернарного
                        ? css.up
                        : css.bottom,
                )}
            >
                {props.children}
            </Layout>
        </div>
    );
};

export default Popover;
