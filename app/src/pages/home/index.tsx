import { FC } from 'react';

import { Layout } from 'ui-kit';

import { ROUTE_CONFIG } from '../../shared/config/routeConfig';

import css from './HomePage.module.scss';

const HomePage: FC = () => {
    return (
        <>
            <title>{ROUTE_CONFIG.HOME.title}</title>
            <div className={css.root}>
                <Layout hasGradient>
                    <span></span>
                </Layout>
                <Layout>
                    <span></span>
                </Layout>
                <Layout>
                    <span></span>
                </Layout>
            </div>
        </>
    );
};

export default HomePage;
