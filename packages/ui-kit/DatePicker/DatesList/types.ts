import { DateItem } from '../types';

export interface DatesListProps {
    daysArr: Array<DateItem>;
    handleClick: (year: number) => void;
}