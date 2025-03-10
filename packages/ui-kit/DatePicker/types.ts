export type DateItem = {
    timestamp: number,
    day: number,
    isCurrent: boolean,
    isSelected: boolean,
    isEdge: boolean
    isHoliday: boolean
}

export type YearHandler = {
    year: number,
    month: number
}

export type YearItem = {
    value: number,
    isCurrent: boolean,
}

export interface DatePickerProps {
    startDate?: string | Date;
    endDate?: string | Date;
}