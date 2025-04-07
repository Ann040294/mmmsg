import { FC } from 'react';

import { Layout } from 'ui-kit';

import { Navbar } from '@widgets/Navbar';

import { defaultConfig } from './config/defaultConfig';
import CustomOutlet from './CustomOutlet/CustomOutlet';
import { CustomOutletNames } from './CustomOutlet/types';

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
            <Layout className={css.left}>
                <CustomOutlet name={CustomOutletNames.FIRST} />
            </Layout>
            <Layout>
                <CustomOutlet name={CustomOutletNames.SECOND} />
            </Layout>
        </div>
    );
};

export default LayoutPage;
