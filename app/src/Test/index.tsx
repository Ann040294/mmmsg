import { TestAvatars } from './components/TestAvatars';
import { TestButtons } from './components/TestButtons';
import { TestCards } from './components/TestCards';
import { TestInputs } from './components/TestInputs';

import css from './style.module.scss';
import TestDropdown from './components/TestDropdown';

const Test = () => {
    return (
        <div className={css.wrap}>
            <TestAvatars />
            <TestDropdown />
            <TestButtons />
            <TestCards />
            <TestInputs />
        </div>
    );
};

export default Test;
