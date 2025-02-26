import { FC, useMemo, useState } from 'react';
import UserIcon from '@ant-design/icons/UserOutlined';

import { DropdownMenu, Layout } from 'ui-kit';
import { Button } from 'ui-kit/Button';
import { PopoverPosition, PopoverSide } from 'ui-kit/Popover';

const TestDropdowns: FC = () => {
    const [position, setPosition] = useState<PopoverPosition>(
        PopoverPosition.BOTTOM,
    );
    const [side, setSide] = useState<PopoverSide>(PopoverSide.START);

    const optionsPosition = useMemo(() => {
        return Object.values(PopoverPosition).map((item) => ({
            id: item,
            text: item,
            onClick: () => setPosition(item),
        }));
    }, []);

    const optionsSide = useMemo(() => {
        return Object.values(PopoverSide).map((item) => ({
            id: item,
            text: item,
            onClick: () => setSide(item),
        }));
    }, []);

    return (
        <Layout
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: '50px',
            }}
        >
            <DropdownMenu
                position={position}
                side={side}
                options={optionsPosition}
            >
                <Button
                    text={'Position'}
                    onClick={() => {}}
                />
            </DropdownMenu>
            <DropdownMenu
                position={position}
                side={side}
                options={optionsSide}
            >
                <Button
                    text={'Side'}
                    onClick={() => {}}
                />
            </DropdownMenu>
            <DropdownMenu
                position={position}
                side={side}
                options={[
                    {
                        id: '1',
                        text: 'text',
                    },
                    {
                        id: '2',
                        text: 'isDisable',
                        isDisabled: true,
                    },
                    {
                        id: '3',
                        text: 'with Icon',
                        icon: UserIcon,
                    },
                    {
                        id: '4',
                        text: 'onClick ',
                        icon: UserIcon,
                        onClick: (item) => {
                            alert(item.id);
                        },
                    },
                    {
                        id: '5',
                        text: 'длинный текст длинный текст длинный текст длинный текст длинный текст длинный текст длинный текст длинный текст ',
                        icon: UserIcon,
                    },
                ]}
            >
                <Button
                    text={'Example'}
                    onClick={() => {}}
                />
            </DropdownMenu>
        </Layout>
    );
};

export default TestDropdowns;
