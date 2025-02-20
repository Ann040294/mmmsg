import { RefObject, useEffect, useRef, useState } from 'react';

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

// const useDetectOutsideClick = <T extends HTMLElement>(callback) => {
//     const refObject = useRef<T>(null);
//     useEffect(() => {
//         console.log('ref', refObject.current);
//         const PageOnClickEvent = (event: MouseEvent) => {
//             if (
//                 refObject.current !== null &&
//                 !refObject.current.contains(event.target as Node)
//             ) {
//                 callback();
//             }
//         };
//
//         if (refObject.current) {
//             window.addEventListener('click', PageOnClickEvent);
//         }
//
//         return () => window.removeEventListener('click', PageOnClickEvent);
//     }, [callback]);
//
//     return refObject;
// };

export default useDetectOutsideClick;
