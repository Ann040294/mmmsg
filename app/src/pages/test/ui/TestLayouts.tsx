import { FC } from 'react';

import { Layout } from 'ui-kit';

export const TestLayouts: FC = () => {
    return (
        <Layout style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Layout hasGradient>
                {' '}
                <Layout>
                    {' '}
                    <Layout hasGradient>TestLayouts</Layout>
                </Layout>
            </Layout>

            <Layout hasGradient>TestLayouts</Layout>

            <Layout hasGradient>TestLayouts</Layout>
        </Layout>
    );
};
