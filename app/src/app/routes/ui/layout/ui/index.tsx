import { FC } from 'react';
import { defaultConfig } from '@app/routes/ui/layout/config/defaultConfig';

import { Layout } from 'ui-kit';

import { Navbar } from '@widgets/Navbar';

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
            <Layout className={css.main}>
                <CustomOutlet name={CustomOutletNames.FIRST} />
            </Layout>
            <Layout>
                <CustomOutlet name={CustomOutletNames.SECOND} />
            </Layout>
        </div>
    );
};

export default LayoutPage;
