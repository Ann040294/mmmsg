import { CSSProperties, FC, ReactNode, RefObject } from 'react';
import cn from 'classnames';

import css from './Layout.module.scss';

interface LayoutProps {
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
    ref?: RefObject<HTMLDivElement | null>;
}

const Layout: FC<LayoutProps> = (props) => {
    return (
        <div
            className={cn(css.root, props.className)}
            style={props.style}
            ref={props.ref}
        >
            {props.children}
        </div>
    );
};

export default Layout;
