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

import { useLazyGetCompactMessagesQuery } from '@entities/compactMessage/api/slice';
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

    const [getCompactMessages, { isFetching, isError }] =
        useLazyGetCompactMessagesQuery();

    const isFetchingRef = useRef<boolean>(false);

    const rootElement = useRef<HTMLDivElement | null>(null);

    const valueDebounce = useDebounce<string>(valueInput, 500);

    const { isToggled, toggle } = useIsToggled();

    const { count: page, set: setPage, increase } = useCounter(1);

    const { t } = useTranslation();

    useEffect(() => {
        isFetchingRef.current = isFetching;
    }, [isFetching]);

    useEffect(() => {
        if (isToggled === undefined || isFetching) {
            return;
        }

        let isMounted = true;

        (async () => {
            const { data: messages } = await getCompactMessages({
                search: valueDebounce,
                paginationSettings: {
                    page,
                    maxSize: MAX_SIZE_ON_PAGE,
                },
            });

            if (isMounted && messages && !isError) {
                setCompactMessages((prev) => [...prev, ...messages]);
            }
        })();

        return () => {
            isMounted = false;
        };
    }, [isToggled]);

    useEffect(() => {
        if (rootElement.current) {
            rootElement.current.scrollTop = 0;
            setCompactMessages([]);
            setPage(1);
            toggle();
        }
    }, [valueDebounce]);

    const handleInfiniteScroll = useCallback(() => {
        if (!isFetchingRef.current) {
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
                isDisabled={isFetching}
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
            <div className={css.loader}>{isFetching && <LinearLoader />}</div>
            {/*{isError && ( //TODO: Переделать после того, как исправят компонент, в данном случае работа будет неверной при ошибке */}
            {/*    <Notice*/}
            {/*        hasBorder*/}
            {/*        key="errorMessageList"*/}
            {/*        type={NoticeTypes.ERROR}*/}
            {/*        message={t('notice.error')}*/}
            {/*    />*/}
            {/*)}*/}
        </>
    );
};

export default MessageList;
