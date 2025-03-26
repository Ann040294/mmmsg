import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router';

import { Layout } from 'ui-kit';

interface NestedLayoutProps {
    children: ReactNode;
    className?: string;
}

const NestedLayout: FC<NestedLayoutProps> = (props) => {
    return (
        <>
            <Layout className={props.className}>{props.children}</Layout>
            <Layout>
                <Outlet />
            </Layout>
        </>
    );
};

export default NestedLayout;
