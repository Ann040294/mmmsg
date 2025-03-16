import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { Card, Input } from 'ui-kit';
import { InputVariants } from 'ui-kit/Input';

import { getAllCompactMessages } from '@entities/compactMessage/api/getAllCompactMessages';
import { searchCompactMessages } from '@entities/compactMessage/api/searchCompactMessages';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

import { useDebounce } from '@shared/lib/hooks/useDebounce';
import { useInfiniteScroll } from '@shared/lib/hooks/useInfiniteScroll';

import css from './MessageList.module.scss';

const MessageList: FC = () => {
    const [valueInput, setValueInput] = useState<string>('');
    const [compactMessages, setCompactMessages] = useState<CompactMessage[]>(
        [],
    );
    console.log(compactMessages)

    const debounceValue = useDebounce<string>(valueInput, 1000);
    const rootElement = useInfiniteScroll<HTMLDivElement | null>(() => {
        getAllCompactMessages(13).then((value) => {
            setCompactMessages((prevState) => [...prevState, ...value]);
        });
    });

    useEffect(() => {
        getAllCompactMessages(13).then((value) => {
            setCompactMessages(value);
        });
    }, []);

    useEffect(() => {
        searchCompactMessages(debounceValue).then((value) =>
            setCompactMessages(value),
        );
    }, [debounceValue]);

    const handleOnChange = useCallback(
        (value: ChangeEvent<HTMLInputElement>) => {
            setValueInput(value.target.value);
        },
        [],
    );

    return (
        <div>
            <Input
                variant={InputVariants.FILLED}
                placeholder={'Поиск...'}
                value={valueInput}
                iconLeft={SearchOutlined}
                onChange={handleOnChange}
            />
            <div
                className={css.cardList}
                ref={rootElement}
            >
                {compactMessages.map((item) => (
                    <Card
                        key={item.idUser}
                        title={item.fullName}
                        avatarSrc={item.avatarSrc}
                        description={item.message}
                    />
                ))}
            </div>
        </div>
    );
};

export default MessageList;
