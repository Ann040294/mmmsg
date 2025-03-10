import { JSX, useState } from 'react';

import { YearItem } from '../types';

import { YearListMonth, YearListProps } from './types';

import styles from './YearList.module.scss'

const MONTHS = [
    { label: 'январь', value: 0 },
    { label: 'февраль', value: 1 },
    { label: 'март', value: 2 },
    { label: 'апрель', value: 3 },
    { label: 'май', value: 4 },
    { label: 'июнь', value: 5 },
    { label: 'июль', value: 6 },
    { label: 'август', value: 7 },
    { label: 'сентябрь', value: 8 },
    { label: 'октябрь', value: 9 },
    { label: 'ноябрь', value: 10 },
    { label: 'декабрь', value: 11 }
]

const YearList = (props: YearListProps):JSX.Element => {
    const {
        yearsArr,
        handleClick
    } = props;

    const [selectedYear, setSelectedYear] = useState<number | null>(null);

    const handleYearClick = (value:number):void => setSelectedYear(value);
    const handleMonthClick = (value:number):void => handleClick({
        year: selectedYear as number,
        month: value
    })

    return (
        <div className={styles.yearList}>
            { !selectedYear ?
                (
                    yearsArr.map((item:YearItem) => {
                        return <button className={`${styles.itemYear} ${item.isCurrent ? styles.active : ''}`} key={item.value} onClick={() => handleYearClick(item.value)}>{item.value}</button>
                    })
                ) : (
                    MONTHS.map((item:YearListMonth) => {
                        return <button key={item.value} className={styles.itemMonth} onClick={() => handleMonthClick(item.value)}>{item.label}</button>
                    })
                )
            }
        </div>
    )
}

export default YearList;