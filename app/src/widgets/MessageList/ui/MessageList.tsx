import { FC } from 'react';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { Card, Input } from 'ui-kit';
import { InputVariants } from 'ui-kit/Input';

import { compactMessagesMock } from '@entities/compactMessage/mock/compactMessagesMock';

import css from './MessageList.module.scss';

const MessageList: FC = () => {
    return (
        <div className={css.root}>
            <Input
                variant={InputVariants.FILLED}
                placeholder={'Поиск...'}
                iconLeft={SearchOutlined}
            />
            {compactMessagesMock.map((item, index) => (
                <Card
                    title={item.fullName}
                    avatarSrc={item.avatar}
                    description={item.message}
                    key={index}
                />
            ))}
        </div>
    );
};

export default MessageList;
