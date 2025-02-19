import { Layout } from 'ui-kit';

import { TestAvatars } from './components/TestAvatars';
import { TestButtons } from './components/TestButtons';
import { TestCards } from './components/TestCards';
import { TestIcons } from './components/TestIcons';
import { TestInputs } from './components/TestInputs';
import { TestNotices } from './components/TestNotices';

import css from './style.module.scss';

const Test = () => {
    return (
        <>
            <Layout className={css.column}>
                <TestIcons />
                <TestNotices />
            </Layout>
            <Layout className={css.row}>
                <TestAvatars />
                <TestCards />
                <TestInputs />
                <TestButtons />
            </Layout>
        </>
    );
};

export default Test;
