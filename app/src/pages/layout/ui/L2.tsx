import { FC } from 'react';

import { Layout } from 'ui-kit';

import { Navbar } from '@pages/layout/ui/Navbar';

import { defaultConfig } from '../config/defaultConfig';

import css from './layout.module.scss';
import NamedOutlet from '@app/routes/Test/NamedOutlet';

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
                <NamedOutlet name={'left'} />
            </Layout>
            <Layout>
                <NamedOutlet name={'right'} />
            </Layout>
        </div>
    );
};

export default LayoutPage;
