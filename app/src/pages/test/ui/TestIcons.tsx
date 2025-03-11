import { FC } from 'react';
import AccountBookTwoTone from '@ant-design/icons/AccountBookTwoTone';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { Icon, Layout } from 'ui-kit';

export const TestIcons: FC = () => {
    return (
        <Layout>
            Icons :
            <Icon icon={SearchOutlined} />
            <Icon icon={AccountBookTwoTone} />
        </Layout>
    );
};
