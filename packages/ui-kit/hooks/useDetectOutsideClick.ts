import { useEffect, useRef } from 'react';

const useDetectOutsideClick = <T extends HTMLElement | null>(
    callback: () => void,
) => {

    const refObject = useRef<T>(null);

    useEffect(() => {
        const PageOnClickEvent = (event: MouseEvent) => {
            if (
                refObject.current !== null &&
                !refObject.current.contains(event.target as Node)
            ) {
                callback();
            }
        };

        if (refObject.current) {
            window.addEventListener('click', PageOnClickEvent);
        }

        return () => window.removeEventListener('click', PageOnClickEvent);
    }, [callback]);

    return refObject;
};

export default useDetectOutsideClick;
