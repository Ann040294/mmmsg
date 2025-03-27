import { useCallback, useState } from 'react';

export const useCounter = (initialState: number = 0) => {
    const [count, setCount] = useState<number>(initialState);

    const increase = useCallback(() => setCount((prev) => prev + 1), []);
    const decrease = useCallback(() => setCount((prev) => prev - 1), []);
    const changeCount = useCallback((value: number) => {
        setCount(value);
    }, []);

    return {
        count,
        changeCount,
        increase,
        decrease,
    };
};
