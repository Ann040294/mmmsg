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

import { useInfiniteScroll } from '@shared/lib/hooks/useInfiniteScroll1';

import css from './MessageList.module.scss';

const MessageList: FC = () => {
    const [valueInput, setValueInput] = useState<string>('');
    const [compactMessages, setCompactMessages] = useState<CompactMessage[]>(
        [],
    );
    const [page, setPage] = useState<number>(1);

    const rootElement = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let isMounted = true;

        getAllCompactMessages(page, 15).then((value) => {
            if (isMounted) {
                setCompactMessages((prevState) => [...prevState, ...value]);
            }
        });

        return () => {
            isMounted = false;
        };
    }, [page]);

    const handleInfiniteScroll = useCallback(() => {
        setPage((prevState) => prevState + 1);
    }, []);

    useInfiniteScroll<HTMLDivElement | null>(
        rootElement,
        compactMessages.length,
        handleInfiniteScroll,
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
