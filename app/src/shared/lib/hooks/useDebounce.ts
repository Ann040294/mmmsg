import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number) => {
    const [valueDebounce, setValueDebounce] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setValueDebounce(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay, value]);

    return valueDebounce;
};
