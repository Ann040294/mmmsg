import { useCallback, useState } from 'react';

export const useIncreaseOrDecrease = (initialState: number = 0) => {
    const [count, setCount] = useState<number>(initialState);

    const increase = useCallback(() => setCount((prev) => prev + 1), []);
    const decrease = useCallback(() => setCount((prev) => prev - 1), []);

    return {
        count,
        setCount,
        increase,
        decrease,
    };
};
