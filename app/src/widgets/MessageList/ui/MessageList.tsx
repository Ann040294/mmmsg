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
import { useIncreaseOrDecrease } from '@shared/lib/hooks/useIncreaseOrDecrease';
import { useInfiniteScroll } from '@shared/lib/hooks/useInfiniteScroll';
import { useIsToggle } from '@shared/lib/hooks/useIsToggle';

import css from './MessageList.module.scss';

const MessageList: FC = () => {
    const [valueInput, setValueInput] = useState<string>('');
    const [compactMessages, setCompactMessages] = useState<CompactMessage[]>(
        [],
    );

    const rootElement = useRef<HTMLDivElement | null>(null);

    const valueDebounce = useDebounce<string>(valueInput, 500);

    const { toggle, handleChangeToggle } = useIsToggle();

    const { count: page, handleIncrease } = useIncreaseOrDecrease(1);

    useEffect(() => {
        if (toggle === undefined) {
            return;
        }

        let isMounted = true;

        if (valueDebounce === '') {
            (async () => {
                const valueCompactMessages = await getAllCompactMessages(
                    page,
                    15,
                );
                if (isMounted) {
                    setCompactMessages((prevState) => [
                        ...prevState,
                        ...valueCompactMessages,
                    ]);
                }
            })();
        } else {
            if (rootElement.current) {
                searchCompactMessages(valueDebounce, page, 15).then((value) =>
                    setCompactMessages((prev) => [...prev, ...value]),
                );
            }
        }

        return () => {
            isMounted = false;
        };
    }, [toggle]);

    useEffect(() => {
        if (rootElement.current) {
            rootElement.current.scrollTop = 0;
            setCompactMessages([]);
            setPage(1);
            handleChangeToggle();
        }
    }, [valueDebounce]);

    const handleInfiniteScroll = useCallback(() => {
        handleIncrease();
        handleChangeToggle();
    }, []);

    useInfiniteScroll<HTMLDivElement | null>(
        rootElement,
        compactMessages?.at(-1)?.idUser || '',
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
