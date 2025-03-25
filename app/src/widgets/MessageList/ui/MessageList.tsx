import {
    ChangeEvent,
    FC,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { Card, Input } from 'ui-kit';
import { InputVariants } from 'ui-kit/Input';

import { getAllCompactMessages } from '@entities/compactMessage/api/getAllCompactMessages';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

import { useIncreaseOrDecrease } from '@shared/lib/hooks/useIncreaseOrDecrease';
import { useInfiniteScroll } from '@shared/lib/hooks/useInfiniteScroll';

import css from './MessageList.module.scss';

const MessageList: FC = () => {
    const [valueInput, setValueInput] = useState<string>('');
    const [compactMessages, setCompactMessages] = useState<CompactMessage[]>(
        [],
    );

    const rootElement = useRef<HTMLDivElement | null>(null);

    const { count: page, handleIncrease } = useIncreaseOrDecrease(1);

    useEffect(() => {
        let isMounted = true;

        (async () => {
            const valueCompactMessages = await getAllCompactMessages(page, 15);
            if (isMounted) {
                setCompactMessages((prevState) => [
                    ...prevState,
                    ...valueCompactMessages,
                ]);
            }
        })();

        return () => {
            isMounted = false;
        };
    }, [page]);

    useInfiniteScroll<HTMLDivElement | null>(
        rootElement,
        compactMessages.length,
        handleIncrease,
    );

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
            <div
                className={css.cardList}
                ref={rootElement}
            >
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
