import { JSX } from 'react';

import { YearPickerProps } from './types';

import styles from './YearPicker.module.scss';

const YearPicker = (props:YearPickerProps): JSX.Element => {
    const {
        isOpen,
        year,
        handleClick,
    } = props;

    return (
        <div className={styles.yearPicker}>
            <button 
                className={`${styles.yearBtn} ${isOpen ? styles.active : ''}`}
                onClick={() => handleClick()}
            >{year}<i className={styles.triangle}></i></button>
        </div>
    );
};

export default YearPicker;