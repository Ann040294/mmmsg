import { FC } from 'react';
import { DropdownMenu, Layout } from 'ui-kit';
import UserIcon from '@ant-design/icons/UserOutlined';

import { DropdownTrigger } from 'ui-kit/DropdownMenu/types';
import {Button} from "ui-kit/Button";

const TestDropdown: FC = () => {

    return (
        <Layout style={{height: '50px'}}>
            <div>
                <DropdownMenu
                    trigger={DropdownTrigger.HOVER}
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
                    <Button text={'Example'} onClick={()=>{}}></Button>
                </DropdownMenu>
            </div>
        </Layout>
    );
};

export default TestDropdown;
