import { Layout } from 'ui-kit';

import { TestAvatars } from './components/TestAvatars';
import { TestButtons } from './components/TestButtons';
import { TestCards } from './components/TestCards';
import TestDropdowns from './components/TestDropdowns';
import { TestIcons } from './components/TestIcons';
import { TestInputs } from './components/TestInputs';
import { TestNotices } from './components/TestNotices';

import css from './style.module.scss';

const Test = () => {
    return (
        <>
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
