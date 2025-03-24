import { RefObject, useCallback, useEffect, useRef } from 'react';

export const useInfiniteScroll = <T extends HTMLElement | null>(
    rootElement: RefObject<T>,
    trigger: number | string | boolean,
    callback: () => void,
) => {
    const lastElement = useRef<ChildNode | null | undefined>(null);
    const observer = useRef<IntersectionObserver | null>(null);

    const handleIntersection = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (
                    entry.isIntersecting &&
                    entry.target === lastElement.current
                ) {
                    callback();
                }
            });
        },
        [callback],
    );

    useEffect(() => {
        if (lastElement.current) {
            observer.current?.unobserve(lastElement.current as Element);
        }

        if (rootElement.current) {
            lastElement.current = rootElement.current?.lastChild;
            if (lastElement.current) {
                observer.current?.observe(lastElement.current as Element);
            }
        }
    }, [trigger]);

    useEffect(() => {
        if (rootElement.current) {
            observer.current = new IntersectionObserver(handleIntersection, {
                root: rootElement.current,
            });
        }

        return () => {
            observer.current?.disconnect();
        };
    }, [handleIntersection, rootElement.current]);
};
