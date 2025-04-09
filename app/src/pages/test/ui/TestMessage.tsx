import { FC } from 'react';
import EditOutlined from '@ant-design/icons/EditOutlined';
import PlusCircleOutlined from '@ant-design/icons/PlusCircleOutlined';

import { Layout, Message } from 'ui-kit';
import { MessageVariant } from 'ui-kit/Message/types';

export const TestMessage: FC = () => {
    const handleClickFake = () => alert(42);

    const actions1 = [
        { id: '1', text: '1', icon: EditOutlined, onClick: handleClickFake },
        { id: '2', text: '2', icon: PlusCircleOutlined },
        { id: '3', text: '3', icon: PlusCircleOutlined },
        { id: '4', text: '4', icon: PlusCircleOutlined },
        { id: '5', text: '5', icon: PlusCircleOutlined },
        {
            id: '6',
            text: '6',
            icon: PlusCircleOutlined,
            onClick: handleClickFake,
        },
    ];

    return (
        <div>
            <Layout>
                <Message
                    variant={MessageVariant.SECONDARY}
                    textTextViewer={'Test'}
                    subTextTextViewer={'12:00'}
                    actions={actions1}
                />
                <Message
                    variant={MessageVariant.PRIMARY}
                    textTextViewer={'\n' +
                        '            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'}
                    subTextTextViewer={'12:00'}
                    actions={actions1}
                />
                <Message
                    variant={MessageVariant.PRIMARY}
                    textTextViewer={'Test'}
                    subTextTextViewer={'12:00'}
                    actions={actions1}
                    countShowActions={0}
                />
            </Layout>
        </div>
    );
};
