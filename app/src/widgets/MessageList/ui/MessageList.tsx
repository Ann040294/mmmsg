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
    const [page, setPage] = useState<number>(1);

    const isWasSearch = useRef<boolean>(false);

    const rootElement = useRef<HTMLDivElement | null>(null);

    const valueDebounce = useDebounce<string>(valueInput, 500);

    useEffect(() => {
        let isMounted = true;
        if (valueDebounce === '') {
            getAllCompactMessages(page, 15).then((value) => {
                if (isMounted) {
                    if (isWasSearch.current) {
                        setCompactMessages(value);
                        isWasSearch.current = false;
                    } else {
                        setCompactMessages((prevState) => [
                            ...prevState,
                            ...value,
                        ]);
                    }
                }
            });
        } else {
            console.log('start');
            if (rootElement.current) {
                rootElement.current.scrollTop = 0;
                setPage(1);
                isWasSearch.current = true;

                searchCompactMessages(valueDebounce).then(setCompactMessages);
            }
        }

        return () => {
            isMounted = false;
        };
    }, [page, valueDebounce]);

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
            {page}
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
