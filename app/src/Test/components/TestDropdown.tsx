import { FC } from 'react';
import { DropdownMenu, Layout } from 'ui-kit';
import UserIcon from '@ant-design/icons/UserOutlined';

import { DropdownTrigger } from 'ui-kit/DropdownMenu/types';

const TestDropdown: FC = () => {

    return (
        <Layout>
            <div>
                <DropdownMenu
                    trigger={DropdownTrigger.HOVER}
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
                        },
                    ]}
                >
                    <button>
                        Example
                    </button>
                </DropdownMenu>
            </div>
        </Layout>
    );
};

export default TestDropdown;
