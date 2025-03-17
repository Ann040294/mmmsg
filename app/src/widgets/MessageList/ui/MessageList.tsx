import {ChangeEvent, FC, useCallback, useEffect, useRef, useState} from 'react';
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
    console.log('page_start', page);
    const rootEl = useRef<HTMLDivElement | null>(null);
    const debounceValue = useDebounce<string>(valueInput, 1000);
    useInfiniteScroll<HTMLDivElement | null>(() => {
        setPage((prevState) => prevState + 1);
    }, rootEl);

    // useEffect(() => {
    //     if (debounceValue) {
    //         setCompactMessages([]);
    //         setPage(1);
    //         searchCompactMessages(debounceValue).then((value) =>
    //             setCompactMessages((prevState) => [...prevState, ...value]),
    //         );
    //     }
    // }, [debounceValue]);
    // useEffect(() => {
    //     console.log('compactMessages', compactMessages);
    //     console.log('compactMessagesL', compactMessages.length);
    // }, [compactMessages]);

    // useEffect(() => {
    //     console.log('1_first_render_page', page);
    //
    //     return ()=>console.log('first_render')
    // }, []);

    // useEffect(() => {
    //     console.log('2_rererender', page);
    //
    //     return ()=>console.log('rererereender')
    // }, );

    useEffect(() => {
        console.log('3_page_render', page);

        // return ()=>console.log('render')
        getAllCompactMessages(page, 15).then((value) => {
            console.log('valueGetAll', value);

            return setCompactMessages((prevState) => [...prevState, ...value]);
        });
    }, [page]);

    // const handleOnChange = useCallback(
    //     (value: ChangeEvent<HTMLInputElement>) => {
    //         setValueInput(value.target.value);
    //     },
    //     [],
    // );

    return (
        <div>
            {/*<Input*/}
            {/*    variant={InputVariants.FILLED}*/}
            {/*    placeholder={'Поиск...'}*/}
            {/*    // value={valueInput}*/}
            {/*    iconLeft={SearchOutlined}*/}
            {/*    // onChange={handleOnChange}*/}
            {/*/>*/}
            <div
                className={css.cardList}
                ref={rootEl}
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
