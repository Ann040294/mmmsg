import { cloneElement, FC } from 'react';
import { Outlet, useLocation, useOutlet } from 'react-router';

import { Layout } from 'ui-kit';

import LL3 from '@pages/layout/ui/LL3';
import { Navbar } from '@pages/layout/ui/Navbar';

import { defaultConfig } from '../config/defaultConfig';

import css from './layout.module.scss';

const LayoutPage: FC = () => {
    const outlet = useOutlet();
    const children = outlet?.props.children.props.children;
    const layouts = Array.isArray(children) ? children : [children];
    console.log(outlet);

    const location = useLocation();
    console.log(location);

    return (
        <div className={css.root}>
            <Layout
                hasGradient
                className={css.navbar}
            >
                <Navbar options={defaultConfig} />
            </Layout>
            {layouts.map((Item) => {
                // item.children = outlet;
                console.log('r', Item.props.route);
                console.log('p', location.pathname);

                return (
                    <Layout key={Item.key}>
                        {/*{location.pathname.includes(item.props.route) && (*/}
                        {/*    <Outlet />*/}
                        {/*)}*/}
                        {/*{String(item.props?.settings)}*/}
                        <LL3
                            show={location.pathname.includes(Item.props.route)}
                        >
                            {Item}
                        </LL3>
                        {/*<Item />*/}
                    </Layout>
                );
            })}
            {/*<Outlet />*/}
        </div>
    );
};

export default LayoutPage;
