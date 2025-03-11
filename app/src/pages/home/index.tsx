import { FC } from 'react';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';
import { HeaderPage } from '@shared/ui/HeaderPage';

import { LeftIconsHeaderPage, RightIconsHeaderPage } from './optionsHeaderPage';

const HomePage: FC = () => {
    return (
        <>
            <title>{ROUTE_CONFIG.HOME.title}</title>
            <HeaderPage
                label={ROUTE_CONFIG.HOME.labelPage}
                rightIcons={LeftIconsHeaderPage}
                leftIcons={RightIconsHeaderPage}
            />
        </>
    );
};

export default HomePage;
