import { CSSProperties, FC, ReactNode, RefObject } from 'react';
import cn from 'classnames';

import css from './Layout.module.scss';

interface LayoutProps {
    children: ReactNode;
    hasGradient?: boolean;
    className?: string;
    style?: CSSProperties;
    ref?: RefObject<HTMLDivElement | null>;
}

const Layout: FC<LayoutProps> = ({
    children,
    hasGradient,
    className,
    style,
    ref,
}) => {
    return (
        <div
            style={style}
            ref={ref}
            className={cn(
                css.root,
                className,
                hasGradient && css.gradient
            )}
        >
            {children}
        </div>
    );
};

export default Layout;
