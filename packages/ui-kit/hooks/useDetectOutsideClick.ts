import { useEffect, useRef } from 'react';

const useDetectOutsideClick = <T extends HTMLElement | null>(
    callback: () => void,
) => {
    const refObject = useRef<T>(null);

    useEffect(() => {
        const pageOnClickEvent = (event: MouseEvent) => {
            if (
                refObject.current !== null &&
                !refObject.current.contains(event.target as Node)
            ) {
                callback();
            }
        };

        if (refObject.current) {
            window.addEventListener('click', pageOnClickEvent);
        }

        return () => window.removeEventListener('click', pageOnClickEvent);
    }, [callback]);

    return refObject;
};

export default useDetectOutsideClick;
