import { JSX, useEffect, useState } from 'react';

import DatesList from './DatesList/DatesList';
import YearList from './YearList/YearList';
import YearPicker from './YearPicker/YearPicker';
import { DatePickerProps, YearHandler, YearItem } from './types';
import { DateItem } from './types'

import styles from './DatePicker.module.scss';

const DAYS_IN_CALENDAR_VIEW = 42;

const getDaysArray = (sDate:Date, eDate:Date, year:number, month:number):Array<DateItem> => {
    const sDateStamp = sDate.getTime();
    const eDateStamp = eDate.getTime();

    const daysOfTheMonth = new Date(year, month + 1, 0).getDate();

    const getDayObj = (year:number, month:number, day:number, isCurrent:boolean):DateItem => {
        const timestamp = new Date(year, month, day).getTime();
        const isSelected = sDateStamp <= timestamp && eDateStamp >= timestamp;
        const isEdge = timestamp === sDateStamp || eDateStamp === timestamp;
        const isHoliday = day === 0 || day === 6;

        return {
            timestamp: timestamp,
            day: day,
            isCurrent: isCurrent,
            isSelected: isSelected,
            isEdge: isEdge,
            isHoliday: isHoliday
        }
    }

    const daysArr = Array(daysOfTheMonth).fill({})
        .map((item, index) => getDayObj(year, month, index + 1, true));

    const startDay = new Date(daysArr[0].timestamp).getDay();
    if (startDay !== 1 && daysArr.length < DAYS_IN_CALENDAR_VIEW) {
        const missingLeft = !startDay ? 6 : startDay - 1;
        const previous = new Date(year, month, 0);
        const prevMonth = previous.getMonth();
        const prevYear = previous.getFullYear();
        const daysOfPrevMonth = previous.getDate();
        const missingDaysLeft = Array.from(
            { length: missingLeft },
            (item, index) => getDayObj(prevYear, prevMonth, daysOfPrevMonth - index, false)
        );

        daysArr.unshift(...missingDaysLeft.reverse());
    }

    if (daysArr.length < DAYS_IN_CALENDAR_VIEW) {
        const missingRight = DAYS_IN_CALENDAR_VIEW - daysArr.length;
        const next = new Date(year, month + 1, 1);
        const nextMonth = next.getMonth();
        const nextYear = next.getFullYear();
        const missingDaysRight = Array.from(
            { length: missingRight },
            (item, index) => getDayObj(nextYear, nextMonth, index + 1, false)
        );

        daysArr.push(...missingDaysRight);
    }

    return daysArr
}

const getYearsArr = (currentYear:number, arrayLength:number, yearPosition:number):Array<YearItem> =>
    Array.from({ length: arrayLength }, (item, index) => ({
        value: currentYear + (index - yearPosition),
        isCurrent: currentYear === (currentYear + (index - yearPosition))
    }));

const DatePicker = (props: DatePickerProps): JSX.Element => {
    const {
        startDate = new Date().setHours(0, 0, 0, 0),
        endDate = new Date().setHours(0, 0, 0, 0),
    } = props;

    const [sDate, setSDate] = useState<Date>(new Date(startDate));
    const [eDate, setEDate] = useState<Date>(new Date(endDate));
    const [year, setYear] = useState<number>(new Date(startDate).getFullYear());
    const [month, setMonth] = useState<number>(new Date(startDate).getMonth());
    const [yearsArr, setYearsArr] = useState<Array<YearItem>>(getYearsArr(new Date(startDate).getFullYear(), 20, 10));
    const [daysArr, setDaysArr] = useState<Array<DateItem>>(getDaysArray(sDate, eDate, year, month));
    const [isYearListOpen, setIsYearListOpen] = useState<boolean>(false);

    const toggleSelectType = ():void => setIsYearListOpen(!isYearListOpen);
    const onYearListClick = (income:YearHandler):void => {
        setYear(income.year);
        setMonth(income.month);
        setDaysArr(getDaysArray(sDate, eDate, income.year, income.month));
        setIsYearListOpen(false);
    }
    const onDateListClick = () => {};

    useEffect(() => {

    }, [year, month])

    return (
        <div className={styles.datePicker}>
            <div className={styles.header}>
                <YearPicker
                    isOpen={isYearListOpen}
                    year={year}
                    handleClick={toggleSelectType}/>
            </div>
            <div >
                {isYearListOpen ? (
                    <YearList
                        yearsArr={yearsArr}
                        handleClick={onYearListClick}
                    />
                ) : (
                    <DatesList
                        daysArr={daysArr}
                        handleClick={onDateListClick}
                    />
                )}
            </div>
        </div>
    );
};

export default DatePicker;