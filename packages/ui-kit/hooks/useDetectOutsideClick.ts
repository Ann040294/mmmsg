import { RefObject, useEffect, useState } from 'react';

const useDetectOutsideClick = <T extends HTMLElement | null>(
    element: RefObject<T>,
    initialState: boolean,
) => {

    const [isActive, setIsActive] = useState<boolean>(initialState);

    useEffect(() => {
        const PageOnClickEvent = (event: MouseEvent) => {
            if (
                element.current !== null &&
                !element.current.contains(event.target as Node)
            ) {
                setIsActive(false);
            }
        };

        if (isActive) {
            window.addEventListener('click', PageOnClickEvent);
        }

        return () => window.removeEventListener('click', PageOnClickEvent);
    }, [isActive, element]);

    return [isActive, setIsActive] as const;
};
export default useDetectOutsideClick;
