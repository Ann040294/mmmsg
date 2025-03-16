import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number) => {
    const [initialValue, setInitialValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setInitialValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return initialValue;
};
