import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { Card, Input } from 'ui-kit';
import { InputVariants } from 'ui-kit/Input';

import { getAllCompactMessages } from '@entities/compactMessage/api/getAllCompactMessages';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

import css from './MessageList.module.scss';

const MessageList: FC = () => {
    const [valueInput, setValueInput] = useState<string>('');
    const [compactMessages, setCompactMessages] = useState<CompactMessage[]>(
        [],
    );

    useEffect(() => {
        getAllCompactMessages().then(setCompactMessages);
    }, []);

    const handleOnChange = useCallback(
        (value: ChangeEvent<HTMLInputElement>) => {
            setValueInput(value.target.value);
        },
        [],
    );

    return (
        <>
            <Input
                variant={InputVariants.FILLED}
                placeholder="Поиск..." /*TODO: Перевод - Translate*/
                value={valueInput}
                iconLeft={SearchOutlined}
                onChange={handleOnChange}
            />
            <div className={css.cardList}>
                {compactMessages.map((item) => (
                    <Card
                        key={item.idUser}
                        avatarSrc={item.avatarSrc}
                        className={css.card}
                        description={item.message}
                        title={item.fullName}
                    />
                ))}
            </div>
        </>
    );
};

export default MessageList;
