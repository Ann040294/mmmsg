import { FC } from 'react';
import { Outlet } from 'react-router';

import { Layout } from 'ui-kit';

import { Navbar } from '@pages/layout/ui/Navbar';

import { defaultConfig } from '../config/defaultConfig';

import css from './layout.module.scss';
import NestedLayout from '@pages/layout/ui/NestedLayout/NestedLayout';

const LayoutPage: FC = () => {
    return (
        <div className={css.root}>
            <Layout
                hasGradient
                className={css.navbar}
            >
                <Navbar options={defaultConfig} />
            </Layout>
            <Outlet />
            {/*<NestedLayout className={css.main}>*/}
            {/*    <Outlet />*/}
            {/*</NestedLayout>*/}

            {/*    <Layout className={css.main}>*/}
            {/*        <Outlet />*/}
            {/*    </Layout>*/}
            {/*    <Layout>*/}
            {/*        <span>*/}
            {/*            Должен отображаться вложенный маршрут или какой-то*/}
            {/*            стандартный компонент*/}
            {/*        </span>*/}
            {/*    </Layout>*/}
        </div>
    );
};

export default LayoutPage;
