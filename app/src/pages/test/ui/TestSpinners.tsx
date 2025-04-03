import { FC } from 'react';

import { Layout } from 'ui-kit';
import Spinner from 'ui-kit/Spinner/Spinner';
import { SpinnerDuration, SpinnerSizes } from 'ui-kit/Spinner/types';

const TestSpinners: FC = () => {
    return (
        <Layout>
            <Spinner
                size={SpinnerSizes.SMALL}
                duration={SpinnerDuration.LOW}
            />
            <Spinner
                size={SpinnerSizes.MEDIUM}
                duration={SpinnerDuration.AVERAGE}
            />
            <Spinner
                size={SpinnerSizes.LARGE}
                duration={SpinnerDuration.FAST}
            />
        </Layout>
    );
};

export default TestSpinners;
