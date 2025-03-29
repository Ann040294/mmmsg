import { FC } from 'react';

import { Layout } from 'ui-kit';

import { Navbar } from '@pages/layout/ui/Navbar';

import CustomOutlet from '@shared/ui/CustomOutlet/CustomOutlet';

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
                <CustomOutlet name={'main'} />
            </Layout>
            <Layout>
                <CustomOutlet name={'second'} />
            </Layout>
        </div>
    );
};

export default LayoutPage;
