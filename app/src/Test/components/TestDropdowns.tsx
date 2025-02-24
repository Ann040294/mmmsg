import { FC } from 'react';
import { Avatar, DropdownMenu, Layout } from 'ui-kit';
import UserIcon from '@ant-design/icons/UserOutlined';

import { Button } from 'ui-kit/Button';
import { PopoverPosition } from 'ui-kit/Popover/types';

const TestDropdowns: FC = () => {
    return (
        <Layout
            style={{ display: 'flex', flexDirection: 'column', gap: '300px' }}
        >
            <div id={'1'}>
                <DropdownMenu
                    position={PopoverPosition.BOTTOM}
                    options={[
                        {
                            key: '1',
                            text: '459584546',
                            icon: UserIcon,
                        },
                        {
                            key: '2',
                            text: '123',
                            icon: UserIcon,
                        },
                        {
                            key: '3',
                            text: '4567',
                            icon: UserIcon,
                            isDisabled: true,
                        },
                        {
                            key: '4',
                            text: '987',
                            icon: UserIcon,
                        },
                        {
                            key: '5',
                            text: '987',
                            isDisabled: true,
                            icon: UserIcon,
                            onClick: ()=>alert()
                        },
                        {
                            key: '6',
                            text: '9844',
                            onClick: ()=>alert('Drop')
                        },
                    ]}
                >
                    <Button
                        text={'Example'}
                        onClick={() => {}}
                    ></Button>
                </DropdownMenu>
            </div>
            <div id={'2'}>
                <DropdownMenu
                    position={PopoverPosition.TOP}
                    // trigger={DropdownTrigger.HOVER}
                    options={[
                        {
                            key: '1',
                            text: '459584546',
                            icon: UserIcon,
                        },
                        {
                            key: '2',
                            text: '123',
                            icon: UserIcon,
                        },
                        {
                            key: '3',
                            text: '4567',
                            icon: UserIcon,
                            isDisabled: true,
                        },
                        {
                            key: '4',
                            text: '987',
                            icon: UserIcon,
                        },
                        {
                            key: '5',
                            text: '987',
                            isDisabled: true,
                        },
                        {
                            key: '6',
                            text: '9844',
                        },
                    ]}
                >
                    <Button
                        text={'Example'}
                        onClick={() => {}}
                    ></Button>
                </DropdownMenu>
            </div>
            <div id={'3'}>
                <DropdownMenu
                    position={PopoverPosition.BOTTOM_RIGHT}
                    options={[
                        {
                            key: '1',
                            text: '459584546',
                            icon: UserIcon,
                        },
                        {
                            key: '2',
                            text: '123',
                            icon: UserIcon,
                        },
                        {
                            key: '3',
                            text: '4567',
                            icon: UserIcon,
                            isDisabled: true,
                        },
                        {
                            key: '4',
                            text: '987',
                            icon: UserIcon,
                        },
                        {
                            key: '5',
                            text: '987',
                            isDisabled: true,
                        },
                        {
                            key: '6',
                            text: '9844',
                        },
                    ]}
                >
                    <Button
                        text={'Example'}
                        onClick={() => {}}
                    ></Button>
                </DropdownMenu>
            </div>
            <div
                id={'4'}
                style={{ width: 'fit-content' }}
            >
                <DropdownMenu
                    position={PopoverPosition.RIGHT}
                    // trigger={DropdownTrigger.HOVER}
                    options={[
                        {
                            key: '1',
                            text: '459584546',
                            icon: UserIcon,
                        },
                        {
                            key: '2',
                            text: '123',
                            icon: UserIcon,
                        },
                        {
                            key: '3',
                            text: '4567',
                            icon: UserIcon,
                            isDisabled: true,
                        },
                        {
                            key: '4',
                            text: '987',
                            icon: UserIcon,
                        },
                        {
                            key: '5',
                            text: '987',
                            isDisabled: true,
                        },
                        {
                            key: '6',
                            text: '9844',
                        },
                        {
                            key: '7',
                            text: '987',
                            isDisabled: true,
                        },
                        {
                            key: '8',
                            text: '9844',
                        },
                    ]}
                >
                    <Avatar />
                </DropdownMenu>
            </div>

            <div
                id={'5'}
                style={{ width: 'fit-content' }}
            >
                <DropdownMenu
                    position={PopoverPosition.TOP}
                    // trigger={DropdownTrigger.HOVER}
                    options={[
                        {
                            key: '1',
                            text: '459584546',
                            icon: UserIcon,
                        },
                        {
                            key: '2',
                            text: '123',
                            icon: UserIcon,
                        },
                        {
                            key: '3',
                            text: '4567',
                            icon: UserIcon,
                            isDisabled: true,
                        },
                        {
                            key: '4',
                            text: '987',
                            icon: UserIcon,
                        },
                        {
                            key: '5',
                            text: '987',
                            isDisabled: true,
                        },
                        {
                            key: '6',
                            text: '9844',
                        },
                        {
                            key: '7',
                            text: '987',
                            isDisabled: true,
                        },
                        {
                            key: '8',
                            text: '9844',
                        },
                    ]}
                >
                    <div
                        style={{
                            width: '300px',
                            height: '300px',
                            backgroundColor: 'red',
                        }}
                    >
                        TEST
                    </div>
                </DropdownMenu>
            </div>
        </Layout>
    );
};

export default TestDropdowns;
