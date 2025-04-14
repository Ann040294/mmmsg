import { FC } from 'react';

import { Layout, Spinner } from 'ui-kit';
import LinearLoader from 'ui-kit/LinearLoader/LinearLoader';
import { SpinnerDuration, SpinnerSize } from 'ui-kit/Spinner/types';

const TestSpinners: FC = () => {
    return (
        <Layout>
            <Spinner
                size={SpinnerSize.SMALL}
                duration={SpinnerDuration.LOW}
            />
            <Spinner
                size={SpinnerSize.MEDIUM}
                duration={SpinnerDuration.AVERAGE}
            />
            <Spinner
                size={SpinnerSize.LARGE}
                duration={SpinnerDuration.FAST}
            />
            <LinearLoader />
        </Layout>
    );
};

export default TestSpinners;
