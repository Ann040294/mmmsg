import { Layout } from 'ui-kit';

<<<<<<< HEAD:app/src/Test/index.tsx
import { TestAvatars } from './components/TestAvatars';
import { TestButtons } from './components/TestButtons';
import { TestCards } from './components/TestCards';
import { TestCircleButtons } from './components/TestCircleButtons';
import { TestIcons } from './components/TestIcons';
import { TestInputs } from './components/TestInputs';
import { TestNotices } from './components/TestNotices';
=======
import { ROUTE_CONFIG } from '@shared/config/routeConfig';

import { TestAvatars } from './ui/TestAvatars';
import { TestButtons } from './ui/TestButtons';
import { TestCards } from './ui/TestCards';
import TestDropdowns from './ui/TestDropdowns';
import { TestIcons } from './ui/TestIcons';
import { TestInputs } from './ui/TestInputs';
import { TestNotices } from './ui/TestNotices';
>>>>>>> dev:app/src/pages/test/index.tsx

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
                <TestDropdowns />
                <TestInputs />
                <TestButtons />
                <TestCircleButtons />
                <TestNotices />
            </Layout>
        </>
    );
};

export default Test;
