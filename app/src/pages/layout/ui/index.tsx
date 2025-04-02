import { FC } from 'react';
import { Outlet } from 'react-router';
import MessageTwoTone from '@ant-design/icons/MessageTwoTone';

import { Layout } from 'ui-kit';

import { Navbar } from '@pages/layout/ui/Navbar';

import Filler from '@shared/ui/Filler/Filler';

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
            <Layout className={css.left}>
                <Outlet />
            </Layout>
            <Layout>
                <Filler
                    title={'PieChat'}
                    description={'Спасибо за интерес к нашему мессенджеру!'}
                    icon={MessageTwoTone}
                />
            </Layout>
        </div>
    );
};

export default LayoutPage;
