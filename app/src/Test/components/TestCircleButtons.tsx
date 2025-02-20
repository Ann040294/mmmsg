import { FC } from 'react';
import { CircleButton, Layout } from 'ui-kit';
import LogoutOutlined from '@ant-design/icons/LogoutOutlined';

export const TestCircleButtons: FC = () => {
    return (
        <Layout>
            <CircleButton
                icon={LogoutOutlined}
                label="Выйти"
            />
        </Layout>
    );
};
