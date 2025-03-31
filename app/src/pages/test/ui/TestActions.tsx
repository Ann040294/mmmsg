import { FC } from 'react';
import CarTwoTone from '@ant-design/icons/CarTwoTone';

import { Actions, Layout } from 'ui-kit';

export const TestActions: FC = () => {
    const handleClickFake = () => alert(42);

    return (
        <Layout>
            <Actions
                iconArr={[
                    { text: '1', icon: CarTwoTone },
                    { text: '1', icon: CarTwoTone },
                    { text: '1', icon: CarTwoTone },
                ]}
                onClick={handleClickFake}
            ></Actions>
            <Actions iconArr={[{ text: '2', icon: CarTwoTone }]}></Actions>
            <Actions
                iconArr={[
                    { text: '2', icon: CarTwoTone },
                    { text: '2', icon: CarTwoTone },
                    { text: '2', icon: CarTwoTone },
                    { text: '2', icon: CarTwoTone },
                    { text: '2', icon: CarTwoTone },
                ]}
            ></Actions>
        </Layout>
    );
};
