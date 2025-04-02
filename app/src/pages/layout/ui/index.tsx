import { FC } from 'react';
import { Outlet } from 'react-router';

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
                    description={'Lorem ipsum dolor sit amet. Eos similique'}
                    src={
                        'https://avatars.mds.yandex.net/i?id=f6814023df5876b2002221a49ac8c93a_l-5224721-images-thumbs&n=13'
                    }
                />
            </Layout>
        </div>
    );
};

export default LayoutPage;
