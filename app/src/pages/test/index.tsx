import { Layout } from 'ui-kit';

import {ROUTE_CONFIG} from '../../shared/config/routeConfig';

import { TestAvatars } from './ui/TestAvatars';
import { TestButtons } from './ui/TestButtons';
import { TestCards } from './ui/TestCards';
import TestDropdowns from './ui/TestDropdowns';
import { TestIcons } from './ui/TestIcons';
import { TestInputs } from './ui/TestInputs';
import { TestNotices } from './ui/TestNotices';

import css from './style.module.scss';

const Test = () => {
    return (
        <>
            <title>{ROUTE_CONFIG.TEST.title}</title>
            <Layout className={css.column}>
                <TestIcons />
            </Layout>
            <Layout className={css.row}>
                <TestAvatars />
                <TestCards />
                <TestDropdowns/>
                <TestInputs />
                <TestButtons />
                <TestNotices />
            </Layout>
        </>
    );
};

export default Test;
