import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router';

import { Layout } from 'ui-kit';

import css from './NestedLayout.module.scss';

interface NestedLayoutProps {
    children: ReactNode;
}

const NestedLayout: FC<NestedLayoutProps> = (props) => {
    return (
        <>
            <Layout className={css.main}>{props.children}</Layout>
            <Layout>
                <Outlet />
            </Layout>
        </>
    );
};

export default NestedLayout;
