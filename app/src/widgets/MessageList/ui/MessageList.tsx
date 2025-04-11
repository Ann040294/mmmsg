import {
    ChangeEvent,
    FC,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { Card, Input, LinearLoader } from 'ui-kit';
import { InputVariants } from 'ui-kit/Input';

import { getAllCompactMessages } from '@entities/compactMessage/api/getAllCompactMessages';
import { searchCompactMessages } from '@entities/compactMessage/api/searchCompactMessages';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

import { useCounter } from '@shared/lib/hooks/useCounter';
import { useDebounce } from '@shared/lib/hooks/useDebounce';
import { useInfiniteScroll } from '@shared/lib/hooks/useInfiniteScroll';
import { useIsToggled } from '@shared/lib/hooks/useIsToggled';

import css from './MessageList.module.scss';

const MAX_SIZE_ON_PAGE = 15;

const MessageList: FC = () => {
    const [valueInput, setValueInput] = useState<string>('');
    const [compactMessages, setCompactMessages] = useState<CompactMessage[]>(
        [],
    );

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isLoadingRef = useRef<boolean>(false);

    const rootElement = useRef<HTMLDivElement | null>(null);

    const valueDebounce = useDebounce<string>(valueInput, 500);

    const { isToggled, toggle } = useIsToggled();

    const { count: page, set: setPage, increase } = useCounter(1);

    const { t } = useTranslation();

    useEffect(() => {
        if (isToggled === undefined || isLoading) {
            return;
        }

        let isMounted = true;

        setIsLoading(true);

        (async () => {
            let messages: CompactMessage[] = [];

            if (valueDebounce === '') {
                messages = await getAllCompactMessages({
                    page: page,
                    maxSize: MAX_SIZE_ON_PAGE,
                });
            } else {
                if (rootElement.current) {
                    messages = await searchCompactMessages(valueDebounce, {
                        page: page,
                        maxSize: MAX_SIZE_ON_PAGE,
                    });
                }
            }

            if (isMounted) {
                setCompactMessages((prev) => [...prev, ...messages]);
            }

            setIsLoading(false);
        })();

        return () => {
            isMounted = false;
        };
    }, [isToggled]);

    useEffect(() => {
        isLoadingRef.current = isLoading;
    }, [isLoading]);

    useEffect(() => {
        if (rootElement.current) {
            rootElement.current.scrollTop = 0;
            setCompactMessages([]);
            setPage(1);
            toggle();
        }
    }, [valueDebounce]);

    const handleInfiniteScroll = useCallback(() => {
        if (!isLoadingRef.current) {
            increase();
            toggle();
        }
    }, []);

    useInfiniteScroll<HTMLDivElement | null>(
        rootElement,
        compactMessages?.at(-1)?.idUser || '',
        handleInfiniteScroll,
    );

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setValueInput(event.target.value);
    }, []);

    return (
        <>
            <Input
                variant={InputVariants.FILLED}
                placeholder={t('home.search.title')}
                value={valueInput}
                iconLeft={SearchOutlined}
                onChange={handleChange}
            />
            <div
                className={cn(css.cardList)}
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
            <div className={css.loader}>{isLoading && <LinearLoader />}</div>
        </>
    );
};

export default MessageList;
