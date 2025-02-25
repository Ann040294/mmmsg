import { FC, useState } from 'react';
import { DropdownMenu, Layout } from 'ui-kit';
import UserIcon from '@ant-design/icons/UserOutlined';

import { Button } from 'ui-kit/Button';
import { DropdownTrigger } from 'ui-kit/DropdownMenu';
import { PopoverPosition, PopoverSide } from 'ui-kit/Popover';

const TestDropdowns: FC = () => {

    const [position, setPosition] = useState<PopoverPosition>(PopoverPosition.BOTTOM,);

    const [side, setSide] = useState<PopoverSide>(PopoverSide.START);

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
                options={Object.values(PopoverPosition).map((item) => ({
                    id: item,
                    text: item,
                    onClick: () => setPosition(item),
                }))}
            >
                <Button
                    text={'Position'}
                    onClick={() => {}}
                />
            </DropdownMenu>
            <DropdownMenu
                trigger={DropdownTrigger.HOVER}
                position={position}
                side={side}
                options={Object.values(PopoverSide).map((item) => ({
                    id: item,
                    text: item,
                    onClick: () => setSide(item),
                }))}
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
