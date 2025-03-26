import { FC, ReactNode } from 'react';
import { Outlet, useOutlet } from 'react-router';

import { Layout } from 'ui-kit';

interface NestedLayoutProps {
    children: ReactNode;
    className?: string;
}

const NestedLayout: FC<NestedLayoutProps> = (props) => {
    const outlet = useOutlet();
    const children = outlet?.props.children.props.children;
    console.log(children);
    return (
        <>
            <Layout className={props.className}>{props.children}</Layout>
            <Layout hasGradient>
                <Outlet />
            </Layout>
        </>
    );
};

export default NestedLayout;
