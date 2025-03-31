import { FC } from 'react';

import CarTwoTone from '@ant-design/icons/CarTwoTone';

import { Actions, Layout } from 'ui-kit';

export const TestActions: FC = () => {
    return (
        <Layout>
            <Actions
                iconArr={[
                    { text: '1', icon: CarTwoTone },
                    { text: '1', icon: CarTwoTone },
                    { text: '1', icon: CarTwoTone },
                ]}
            >
                <Actions
                    iconArr={[
                        { text: '2', icon: CarTwoTone },
                        { text: '2', icon: CarTwoTone },
                        { text: '2', icon: CarTwoTone,},
                        { text: '2', icon: CarTwoTone },
                        { text: '2', icon: CarTwoTone },
                        {
                            text: '2',
                            icon: CarTwoTone,
                        },
                    ]}
                ></Actions>
            </Actions>
            <Actions iconArr={[{ text: '2', icon: CarTwoTone }]}></Actions>
            <Actions
                iconArr={[
                    { text: '2', icon: CarTwoTone },
                    { text: '2', icon: CarTwoTone },
                    {
                        text: '2',
                        icon: CarTwoTone,
                    },
                    { text: '2', icon: CarTwoTone },
                    { text: '2', icon: CarTwoTone },
                ]}
            ></Actions>
        </Layout>
    );
};
