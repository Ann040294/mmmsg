import { FC } from 'react';

import MessageList from '@widgets/MessageList/ui/MessageList';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';
import { HeaderPage } from '@shared/ui/HeaderPage';

import {
    LEFT_HEADER_PAGE_BUTTONS,
    RIGHT_HEADER_PAGE_BUTTONS,
} from '../config/configHeaderPage';

import css from './HomePage.module.scss';

const Index: FC = () => {
    return (
        <>
            <title>{ROUTE_CONFIG.HOME.title}</title>
            <div className={css.root}>
                <HeaderPage
                    label={ROUTE_CONFIG.HOME.labelPage}
                    rightButtons={RIGHT_HEADER_PAGE_BUTTONS}
                    leftButtons={LEFT_HEADER_PAGE_BUTTONS}
                />
                <MessageList />
            </div>
        </>
    );
};

export default Index;
