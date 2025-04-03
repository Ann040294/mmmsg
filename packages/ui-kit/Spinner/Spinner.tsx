import { FC } from 'react';
import cn from 'classnames';

import { SpinnerDuration, SpinnerSizes } from './types';

import css from './Spinner.module.scss';

interface SpinnerProps {
    size?: SpinnerSizes;
    duration?: SpinnerDuration;
}

const Spinner: FC<SpinnerProps> = ({
    size = SpinnerSizes.MEDIUM,
    duration = SpinnerDuration.AVERAGE,
}) => {
    return <div className={cn(css.spinner, css[size], css[duration])}></div>;
};

export default Spinner;
