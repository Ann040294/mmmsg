import { useCallback, useState } from 'react';

export const useIncreaseOrDecrease = (initialState: number = 0) => {
    const [count, setCount] = useState<number>(initialState);

    const handleIncrease = useCallback(() => setCount((prev) => prev + 1), []);
    const handleDecrease = useCallback(() => setCount((prev) => prev - 1), []);

    return {
        count,
        handleIncrease,
        handleDecrease,
    };
};
