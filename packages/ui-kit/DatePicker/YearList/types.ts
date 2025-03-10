import { YearHandler, YearItem } from '../types';

export interface YearListProps {
    handleClick: (arg0: YearHandler) => void;
    yearsArr: YearItem[];
}

export type YearListMonth = {
    label: string,
    value: number
}