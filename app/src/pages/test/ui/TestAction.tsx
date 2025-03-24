import { FC } from 'react';

import { Action, Layout } from 'ui-kit';

export const TestAction: FC = () => {
    return (
        <Layout>
            <Action iconArr={['1', '2', '3']}></Action>
        </Layout>
    )
};
