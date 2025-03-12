import { FC } from 'react';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';
import { HeaderPage } from '@shared/ui/HeaderPage';

import {
    LEFT_HEADER_PAGE_BUTTONS,
    RIGHT_HEADER_PAGE_BUTTONS,
} from '../config/configHeaderPage';

const Index: FC = () => {
    return (
        <>
            <title>{ROUTE_CONFIG.HOME.title}</title>
            <HeaderPage
                label={ROUTE_CONFIG.HOME.labelPage}
                rightButtons={RIGHT_HEADER_PAGE_BUTTONS}
                leftButtons={LEFT_HEADER_PAGE_BUTTONS}
            />
        </>
    );
};

export default Index;
