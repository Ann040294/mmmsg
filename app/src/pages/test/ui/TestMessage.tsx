import { FC } from 'react';
import EditOutlined from '@ant-design/icons/EditOutlined';
import PlusCircleOutlined from '@ant-design/icons/PlusCircleOutlined';

import { Layout } from 'ui-kit';

import { Message } from '@widgets/Message';
import { MessageVariant } from '@widgets/Message';

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
        <Layout>
            <Message
                variant={MessageVariant.SECONDARY}
                text={'Test'}
                meta={'12:00'}
                actions={actions1}
            />
            <Message
                variant={MessageVariant.SECONDARY}
                meta={'12:00'}
                actions={actions1}
                text={
                    'TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest'
                }
            />
            <Message
                variant={MessageVariant.PRIMARY}
                meta={'12:00'}
                actions={actions1}
                text={
                    'TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest'
                }
            />
            <Message
                variant={MessageVariant.PRIMARY}
                text={'Test'}
                meta={'12:00'}
                actions={actions1}
                countShowActions={0}
            />
            <Message text={'TestActionDefault'} />
        </Layout>
    );
};
