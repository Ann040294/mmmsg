import { FC } from 'react';
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';
import FormOutlined from '@ant-design/icons/FormOutlined';

import { Layout } from 'ui-kit';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';
import HeaderPage from '@shared/ui/HeaderPage/HeaderPage';

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
                    <HeaderPage
                        label={'Chats'}
                        iconsRight={[
                            {
                                id: '1',
                                icon: FormOutlined,
                                onClick: () => {},
                            },
                            {
                                id: '2',
                                icon: ArrowLeftOutlined,
                                onClick: () => {},
                            },
                        ]}
                        iconsLeft={[
                            {
                                id: '3',
                                icon: ArrowLeftOutlined,
                                onClick: () => {},
                            },
                            {
                                id: '4',
                                icon: FormOutlined,
                                onClick: () => {},
                            },
                        ]}
                    />
                </Layout>
                <Layout>
                    <span></span>
                </Layout>
            </div>
        </>
    );
};

export default HomePage;
