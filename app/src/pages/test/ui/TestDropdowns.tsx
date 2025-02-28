import { FC, useMemo, useRef, useState } from 'react';
import UserIcon from '@ant-design/icons/UserOutlined';

import { DropdownMenu, Layout, Popover } from 'ui-kit';
import { Button, ButtonVariants } from 'ui-kit/Button';
import { PopoverPosition, PopoverSide } from 'ui-kit/Popover';

const TestDropdowns: FC = () => {
    const [position, setPosition] = useState<PopoverPosition>(
        PopoverPosition.CENTER,
    );
    const [side, setSide] = useState<PopoverSide>(PopoverSide.BOTTOM);
    const [isOpenPopover, setIsOpenPopover] = useState<boolean>(false);

    const refElm1 = useRef<HTMLDivElement>(null);
    const refElm2 = useRef<HTMLDivElement>(null);

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

    const handleClick = () => {
        setIsOpenPopover((prev) => !prev);
    };

    const handleClickFake = () => 42;

    return (
        <Layout
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                width: 300,
            }}
        >
            <DropdownMenu
                side={PopoverSide.RIGHT}
                options={optionsSide}
            >
                <Button
                    isFullWidth
                    variant={ButtonVariants.SECONDARY}
                    text={`Side: ${side}`}
                    onClick={handleClickFake}
                />
            </DropdownMenu>
            <DropdownMenu
                side={PopoverSide.RIGHT}
                options={optionsPosition}
            >
                <Button
                    isFullWidth
                    variant={ButtonVariants.SECONDARY}
                    text={`Position: ${position}`}
                    onClick={handleClickFake}
                />
            </DropdownMenu>
            <div style={{ marginTop: 200 }} />
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
                    text={'Example Menu'}
                    onClick={handleClickFake}
                />
            </DropdownMenu>

            <div
                ref={refElm1}
                style={{ marginTop: 200 }}
            >
                <Button
                    text={'Example Popover'}
                    onClick={handleClick}
                />
            </div>
            <Popover
                isOpen={isOpenPopover}
                anchorElement={refElm1.current}
                position={position}
                side={side}
            >
                <p>Это содержимое Popover Popover Popover Popover</p>
            </Popover>

            <div
                ref={refElm2}
                style={{ marginTop: 200 }}
            >
                {position}-{side}
            </div>
            <Popover
                isOpen
                anchorElement={refElm2.current}
                position={position}
                side={side}
            >
                <p>Always Open Popover</p>
            </Popover>
        </Layout>
    );
};

export default TestDropdowns;
