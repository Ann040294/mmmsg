import React, { CSSProperties, FC, ReactNode } from 'react';
import cn from 'classnames';

import css from './Layout.module.scss';

interface LayoutProps {
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
    return (
        <div
            className={cn(css.root, props.className)}
            style={props.style}
        >
            {props.children}
        </div>
    );
};

export default Layout;
