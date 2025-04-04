import { useTranslation } from 'react-i18next';

import { Layout } from 'ui-kit';

import TestSpinners from '@pages/test/ui/TestSpinners';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';

import { TestActions } from './ui/TestActions';
import { TestAvatars } from './ui/TestAvatars';
import { TestButtons } from './ui/TestButtons';
import { TestCards } from './ui/TestCards';
import { TestCircleButtons } from './ui/TestCircleButtons';
import TestDropdowns from './ui/TestDropdowns';
import { TestIcons } from './ui/TestIcons';
import { TestInputs } from './ui/TestInputs';
import { TestNotices } from './ui/TestNotices';
import { TestTextViewer } from './ui/TestTextViewer';

import css from './style.module.scss';

const Test = () => {
    const { t } = useTranslation();

    return (
        <>
            <title>{t(ROUTE_CONFIG.TEST.title)}</title>
            <Layout className={css.column}>
                <TestIcons />
            </Layout>
            <Layout className={css.row}>
                <TestActions />
            </Layout>
            <Layout className={css.row}>
                <TestSpinners />
                <TestAvatars />
                <TestNotices />
                <TestDropdowns />
                <TestCircleButtons />
            </Layout>
            <Layout className={css.row}>
                <TestCards />
                <TestInputs />
                <TestButtons />
                <TestTextViewer />
            </Layout>
        </>
    );
};

export default Test;
