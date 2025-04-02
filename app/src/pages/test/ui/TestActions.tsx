import { FC } from 'react';
import EditOutlined from '@ant-design/icons/EditOutlined';
import PlusCircleOutlined from '@ant-design/icons/PlusCircleOutlined';

import { Actions, Layout } from 'ui-kit';
import { ActionsDisplay } from 'ui-kit/Actions';
import { PopoverPosition, PopoverSide } from 'ui-kit/Popover';

export const TestActions: FC = () => {
    const handleClickFake = () => alert(42);

    const actions1 = [
        { id: '1', text: '1', icon: EditOutlined },
        { id: '2', text: '2', icon: PlusCircleOutlined },
        { id: '3', text: '3', icon: PlusCircleOutlined },
        { id: '4', text: '4', icon: PlusCircleOutlined },
        { id: '5', text: '5', icon: PlusCircleOutlined },
        { id: '6', text: '6', icon: PlusCircleOutlined },
    ];

    const actions2 = [
        { id: '1', text: '1', icon: EditOutlined },
        { id: '2', text: '2', icon: PlusCircleOutlined },
        { id: '3', text: '3', icon: PlusCircleOutlined },
        { id: '4', text: '4', icon: PlusCircleOutlined },
        { id: '5', text: '5', icon: PlusCircleOutlined },
        { id: '6', text: '6', icon: EditOutlined },
    ];
    const actions3 = [
        { id: '1', text: '1', icon: EditOutlined },
        { id: '2', text: '2', icon: PlusCircleOutlined },
        { id: '3', text: '3', icon: PlusCircleOutlined },
        { id: '4', text: '4', icon: PlusCircleOutlined },
        { id: '5', text: '5', icon: PlusCircleOutlined },
        { id: '6', text: '6', icon: PlusCircleOutlined },
        { id: '7', text: '7', icon: PlusCircleOutlined },
        { id: '8', text: '8', icon: PlusCircleOutlined },
        { id: '9', text: '9', icon: PlusCircleOutlined },
        { id: '10', text: '10', icon: PlusCircleOutlined },
    ];

    return (
        <Layout>
            <Actions
                countShow={3}
                position={PopoverPosition.START}
                side={PopoverSide.LEFT}
                actions={actions1}
                onClick={handleClickFake}
            ></Actions>
            <Actions
                actions={[{ id: 1, text: '2', icon: PlusCircleOutlined }]}
                onClick={handleClickFake}
            ></Actions>
            <Actions
                display={ActionsDisplay.LEFT}
                actions={actions2}
            ></Actions>
            <Actions
                countShow={15}
                actions={actions3}
                onClick={handleClickFake}
            ></Actions>
        </Layout>
    );
};
