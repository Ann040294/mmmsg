import { TestAvatars } from './components/TestAvatars';
import { TestButtons } from './components/TestButtons';
import { TestCards } from './components/TestCards';
import TestDropdowns from './components/TestDropdowns';
import { TestInputs } from './components/TestInputs';
import TestPopovers from './components/TestPopovers';

import css from './style.module.scss';

const Test = () => {
    return (
        <div className={css.wrap}>
            <TestAvatars />
            <TestDropdowns />
            <TestPopovers />
            <TestButtons />
            <TestCards />
            <TestInputs />
        </div>
    );
};

export default Test;
