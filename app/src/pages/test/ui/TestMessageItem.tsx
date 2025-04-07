import { FC } from 'react';
import EditOutlined from '@ant-design/icons/EditOutlined';
import PlusCircleOutlined from '@ant-design/icons/PlusCircleOutlined';

import { Layout, MessageItem } from 'ui-kit';
import { MessageItemVariant } from 'ui-kit/MessageItem/types';

export const TestMessageItem: FC = () => {
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
                <MessageItem
                    variant={MessageItemVariant.SECONDARY}
                    textTextViewer={'Test'}
                    subTextTextViewer={'12:00'}
                    actions={actions1}
                />
                <MessageItem
                    variant={MessageItemVariant.PRIMARY}
                    textTextViewer={'Test'}
                    subTextTextViewer={'12:00'}
                    actions={actions1}
                />
                <MessageItem
                    variant={MessageItemVariant.PRIMARY}
                    textTextViewer={'Test'}
                    subTextTextViewer={'12:00'}
                    actions={actions1}
                    countShowActions={0}
                />
            </Layout>
        </div>
    );
};
