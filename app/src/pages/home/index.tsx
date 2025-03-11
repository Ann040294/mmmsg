import { FC } from 'react';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { Input } from 'ui-kit';
import { InputVariants } from 'ui-kit/Input';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';

const HomePage: FC = () => {
    return (
        <>
            <title>{ROUTE_CONFIG.HOME.title}</title>
            <div>Чаты</div>
            <Input
                variant={InputVariants.FILLED}
                placeholder={'Поиск...'}
                iconLeft={SearchOutlined}
            />
        </>
    );
};

export default HomePage;
