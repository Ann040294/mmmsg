import {
    ChangeEvent,
    FC,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import cn from 'classnames';
import isUndefined from 'lodash/isUndefined';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { Card, Input, InputVariants, LinearLoader } from 'ui-kit';

import css from '@widgets/MessageList/ui/MessageList.module.scss';

import {
    useAddContactMutation,
    useLazyGetAllContactsQuery,
} from '@entities/contacts/api/slice';
import { Contact } from '@entities/contacts/model/contact';

import { FIND_USER_REGEX_MASK } from '@shared/config/regexMasks';
import { useCounter } from '@shared/lib/hooks/useCounter';
import { useDebounce } from '@shared/lib/hooks/useDebounce';
import { useInfiniteScroll } from '@shared/lib/hooks/useInfiniteScroll';
import { useIsToggled } from '@shared/lib/hooks/useIsToggled';

const ContactList: FC = () => {
    const [valueInput, setValueInput] = useState<string>('');
    const [contacts, setContacts] = useState<Contact[]>([]);

    const rootElement = useRef<HTMLDivElement | null>(null);
    const isLoadingRef = useRef<boolean>(false);

    const [getAllContacts, { isFetching, isError }] =
        useLazyGetAllContactsQuery();

    const [addContact, { isLoading: isLoadingAddContact }] =
        useAddContactMutation();

    const { t } = useTranslation();

    const { isToggled, toggle } = useIsToggled();

    const { count: page, set: setPage, increase } = useCounter(1);

    const navigate = useNavigate();

    const valueDebounce = useDebounce<string>(valueInput, 500);

    const canNotAddContact =
        !FIND_USER_REGEX_MASK.test(valueDebounce) ||
        isFetching ||
        isLoadingAddContact;

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
            const { data } = await getAllContacts({
                search: valueDebounce,
                paginationSettings: { page, maxSize: 15 },
            });

            const isAllowChange = isMounted && data && !isError;

            if (isAllowChange) {
                setContacts((prevState) => [...prevState, ...data]);
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

    const handleClickButton = useCallback(async () => {
        try {
            await addContact({ ip: valueDebounce });

            //TODO: Работа с toast, когда появится
            console.log('Контакт добавлен');
            setValueInput('');
        } catch (error) {
            //TODO: Работа с toast, когда появится
            console.log('Error', error);
        }
    }, []);

    const handleClickContact = useCallback((id: string) => {
        navigate('/chat/1'); //TODO: Исправить на использование RouteConfig, когда будет фикс CustomOutlet
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
            {/*TODO: Добавить кнопку, когда появится disabled*/}
            {/*<Button*/}
            {/*    text={'Создать чат'}*/}
            {/*    variant={ButtonVariants.SECONDARY}*/}
            {/*/>*/}
            <button
                disabled={canNotAddContact}
                onClick={handleClickButton}
            >
                Создать чат
            </button>
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
                        onClick={() => handleClickContact(item.idUser)}
                    />
                ))}
            </div>
            <div className={css.loader}>{isFetching && <LinearLoader />}</div>
            {/*TODO: Добавить Toast для ошибок*/}
        </>
    );
};

export default ContactList;
