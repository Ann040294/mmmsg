import { FC } from 'react';
import { Outlet } from 'react-router';

import { Layout } from 'ui-kit';

import { Navbar, optionsNavbar } from '@pages/layout/ui/Navbar';

import css from './layout.module.scss';

const LayoutPage: FC = () => {

    return (
        <div className={css.root}>
            <Layout hasGradient>
                <Navbar options={optionsNavbar} />
            </Layout>
            <Layout>
                <Outlet />
            </Layout>
            <Layout>
                <span>
                    Должен отображаться вложенный маршрут или какой-то стандартный компонент
                </span>
            </Layout>
        </div>
    );
};

export default LayoutPage;
