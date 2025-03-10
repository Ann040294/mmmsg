import { JSX } from 'react';

import { DatesListProps } from './types';

import styles from './DatesList.module.scss'

const dayTitles = [
    {label: 'пн', isHoliday: false},
    {label: 'вт', isHoliday: false},
    {label: 'ср', isHoliday: false},
    {label: 'чт', isHoliday: false},
    {label: 'пн', isHoliday: false},
    {label: 'сб', isHoliday: true},
    {label: 'вс', isHoliday: true}
]

const DatesList = (props: DatesListProps):JSX.Element => {
    const {
        daysArr,
        handleClick
    } = props;

    return (
        <div>
            {/*{*/}
            {/*    dayTitles.map(day => {*/}
            {/*        return <span key={day.label} className={`${styles.dayTitle} ${day.isHoliday? styles.holiday : ''}`}>{day.label}</span>*/}
            {/*    })*/}
            {/*}*/}
            {
                daysArr.map((day, i) => {
                    return <button key={day.timestamp}>{day.day}</button>
                })
            }
        </div>
    )
}

export default DatesList;