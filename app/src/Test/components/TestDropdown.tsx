import { FC } from 'react';
import { DropdownMenu, Layout } from 'ui-kit';
import UserIcon from '@ant-design/icons/UserOutlined';

const TestDropdown: FC = () => {
    return (
        <Layout>
            <DropdownMenu
                label={'Example'}
                options={[
                    {
                        key: '1',
                        text: '123456',
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
            />
            <DropdownMenu
                label={'Example'}
                options={[
                    {
                        key: '1',
                        text: '12345235432534',
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
                        options: [
                            {
                                key: '1',
                                text: '123456',
                                icon: UserIcon,
                            },
                            {
                                key: '2',
                                text: '12345235432534',
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
                        ]
                    },
                ]}
            />
        </Layout>
    );
};

export default TestDropdown;
