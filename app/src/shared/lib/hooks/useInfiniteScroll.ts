import { RefObject, useCallback, useEffect, useRef } from 'react';

export const useInfiniteScroll = <T extends HTMLElement | null>(
    rootElement: RefObject<T>,
    callback: () => void,
) => {
    const lastElement = useRef<ChildNode | null | undefined>(null);
    const previousLastElement = useRef<ChildNode | null | undefined>(null);
    const pagLast = useRef<ChildNode | null | undefined>(null);

    const handleIntersection = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            pagLast.current = rootElement.current?.lastChild?.previousSibling;
            entries.forEach((entry) => {
                if (
                    entry.isIntersecting &&
                    entry.target === lastElement.current &&
                    pagLast.current !== previousLastElement.current
                ) {
                    console.log('st');
                    // previousLastElement.current = entry.target;
                    previousLastElement.current = pagLast.current;
                    callback();
                }
            });
        },
        [callback],
    );

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: rootElement.current,
        });

        if (rootElement.current) {
            lastElement.current = rootElement.current.lastChild;
            if (lastElement.current) {
                observer.observe(lastElement.current as Element);
            }
        }

        return () => {
            observer.disconnect();
        };
    }, [handleIntersection, rootElement.current]);

    return rootElement;
};
