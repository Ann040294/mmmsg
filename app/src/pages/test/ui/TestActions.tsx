import { FC } from 'react';
import EditOutlined from '@ant-design/icons/EditOutlined';
import PlusCircleOutlined from '@ant-design/icons/PlusCircleOutlined';

import { Actions, Layout } from 'ui-kit';
import { ActionsPosition } from 'ui-kit/Actions';

export const TestActions: FC = () => {
    const handleClickFake = () => alert(42);

    const actionsArr1 = [
        { text: '1', icon: EditOutlined },
        { text: '2', icon: PlusCircleOutlined },
        { text: '3', icon: PlusCircleOutlined },
        { text: '4', icon: PlusCircleOutlined },
        { text: '5', icon: PlusCircleOutlined },
        { text: '6', icon: PlusCircleOutlined },
    ];

    const actionsArr2 = [
        { text: '1', icon: EditOutlined },
        { text: '2', icon: PlusCircleOutlined },
        { text: '3', icon: PlusCircleOutlined },
        { text: '4', icon: PlusCircleOutlined },
        { text: '5', icon: PlusCircleOutlined },
        { text: '6', icon: EditOutlined },
    ];
    const actionsArr3 = [
        { text: '1', icon: EditOutlined },
        { text: '2', icon: PlusCircleOutlined },
        { text: '3', icon: PlusCircleOutlined },
        { text: '4', icon: PlusCircleOutlined },
        { text: '5', icon: PlusCircleOutlined },
        { text: '6', icon: PlusCircleOutlined },
        { text: '7', icon: PlusCircleOutlined },
        { text: '8', icon: PlusCircleOutlined },
        { text: '9', icon: PlusCircleOutlined },
        { text: '10', icon: PlusCircleOutlined },
        { text: '11', icon: PlusCircleOutlined },
    ];

    return (
        <Layout>
            <Actions
                show={3}
                actionsArr={actionsArr1}
                onClick={handleClickFake}
            ></Actions>
            <Actions
                actionsArr={[{ text: '2', icon: PlusCircleOutlined }]}
                onClick={handleClickFake}
            ></Actions>
            <Actions
                position={ActionsPosition.LEFT}
                actionsArr={actionsArr2}
            ></Actions>
            <Actions
                show={15}
                actionsArr={actionsArr3}
                onClick={handleClickFake}
            ></Actions>
        </Layout>
    );
};
