import { FC } from 'react';
import { Outlet } from 'react-router';
import NamedOutlet from '@app/test/OutletName';

import { Layout } from 'ui-kit';

import { Navbar } from '@pages/layout/ui/Navbar';

import { defaultConfig } from '../config/defaultConfig';

import css from './layout.module.scss';

const LayoutPage: FC = () => {
    return (
        <div className={css.root}>
            <Layout
                hasGradient
                className={css.navbar}
            >
                <Navbar options={defaultConfig} />
            </Layout>
            <Layout className={css.main}>
                <Outlet />
            </Layout>
            <Layout>
                <NamedOutlet />
            </Layout>
        </div>
    );
};

export default LayoutPage;
