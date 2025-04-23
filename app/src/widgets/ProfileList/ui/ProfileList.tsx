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
import isUndefined from 'lodash/isUndefined';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { Button, Card, Input, InputVariants, LinearLoader } from 'ui-kit';
import { ButtonSize, ButtonVariants } from 'ui-kit/Button';

import css from '@widgets/MessageList/ui/MessageList.module.scss';

import { useLazyGetAllContactsQuery } from '@entities/contacts/api/slice';
import { Contact } from '@entities/contacts/model/contact';

import { useCounter } from '@shared/lib/hooks/useCounter';
import { useDebounce } from '@shared/lib/hooks/useDebounce';
import { useInfiniteScroll } from '@shared/lib/hooks/useInfiniteScroll';
import { useIsToggled } from '@shared/lib/hooks/useIsToggled';
import { useNavigate } from 'react-router';

const ProfileList: FC = () => {
    const [valueInput, setValueInput] = useState<string>('');
    const [contacts, setContacts] = useState<Contact[]>([]);

    const rootElement = useRef<HTMLDivElement | null>(null);
    const isLoadingRef = useRef<boolean>(false);

    const [getAllContacts, { isFetching, isError }] =
        useLazyGetAllContactsQuery();

    const { t } = useTranslation();

    const { isToggled, toggle } = useIsToggled();

    const { count: page, set: setPage, increase } = useCounter(1);

    const navigate = useNavigate();

    const valueDebounce = useDebounce<string>(valueInput, 500);

    useEffect(() => {
        isLoadingRef.current = isFetching;
    }, [isFetching]);

    useEffect(() => {
        const isNotReadyFetch = isUndefined(isToggled) || isFetching;

        if (isNotReadyFetch) {
            return;
        }

        let isMounted = true;

        (async () => {
            const result = await getAllContacts({ page, maxSize: 15 }).unwrap();

            const isAllowChange = isMounted && result && !isError;

            if (isAllowChange) {
                setContacts((prevState) => [...prevState, ...result]);
            }
        })();

        return () => {
            isMounted = false;
        };
    }, [isToggled]);

    useEffect(() => {
        if (rootElement.current) {
            rootElement.current.scrollTop = 0;
            setContacts([]);
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

    useInfiniteScroll(
        rootElement,
        contacts.at(-1)?.idUser || '',
        handleInfiniteScroll,
    );

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setValueInput(event.target.value);
    }, []);

    const handleClick = useCallback((id: string) => {
        navigate();
    }, []);

    return (
        <>
            <Input
                variant={InputVariants.FILLED}
                placeholder={t('input-placeholder.search.title')}
                value={valueInput}
                iconLeft={SearchOutlined}
                onChange={handleChange}
            />
            <Button
                text={'Создать чат'}
                variant={ButtonVariants.SECONDARY}
            />
            <div
                className={cn(css.cardList)}
                ref={rootElement}
            >
                {contacts.map((item) => (
                    <Card
                        key={item.idUser}
                        avatarSrc={item.avatarSrc}
                        className={css.card}
                        title={item.fullName}
                        description={item.email}
                        onClick={() => handleClick(item.idUser)}
                    />
                ))}
            </div>
            <div className={css.loader}>{isFetching && <LinearLoader />}</div>
        </>
    );
};

export default ProfileList;
