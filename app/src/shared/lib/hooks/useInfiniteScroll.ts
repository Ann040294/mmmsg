import { useCallback, useEffect, useRef } from 'react';

export const useInfiniteScroll = <T extends HTMLElement | null>(
    callback: () => void,
) => {
    const rootElement = useRef<T>(null);
    const lastElement = useRef<ChildNode | null | undefined>(null);

    const handleIntersection = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback();
                    lastElement.current = null;
                }
            });
        },
        [callback],
    );

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: rootElement.current,
        });

        if (!lastElement.current) {
            lastElement.current = rootElement.current?.lastChild;
        }

        if (lastElement.current) {
            observer.observe(lastElement.current as Element);
        }

        return () => observer.disconnect();
    }, [handleIntersection, rootElement, lastElement]);

    return rootElement;
};
