import { FC } from 'react';
import cn from 'classnames';

import { SpinnerDuration, SpinnerSize } from './types';

import css from './Spinner.module.scss';

interface SpinnerProps {
    size?: SpinnerSize;
    duration?: SpinnerDuration;
}

const Spinner: FC<SpinnerProps> = ({
    size = SpinnerSize.MEDIUM,
    duration = SpinnerDuration.AVERAGE,
}) => {
    return <div className={cn(css.spinner, css[size], css[duration])}></div>;
};

export default Spinner;
