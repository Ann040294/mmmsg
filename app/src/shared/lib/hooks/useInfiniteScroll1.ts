import { RefObject, useCallback, useEffect, useRef } from 'react';

export const useInfiniteScroll = <T extends HTMLElement | null>(
    rootElement: RefObject<T>,
    callback: () => void,
    trigger?: any,
) => {
    const lastElement = useRef<ChildNode | null | undefined>(null);
    const previousLastElement = useRef<ChildNode | null | undefined>(null);
    const observer = useRef<IntersectionObserver | null>(null);

    const handleIntersection = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (
                    entry.isIntersecting &&
                    entry.target === lastElement.current &&
                    entry.target !== previousLastElement.current
                ) {
                    console.log('StartHandle');
                    console.log('root', rootElement.current);
                    console.log('prev', previousLastElement.current);
                    console.log('last', lastElement.current);

                    previousLastElement.current = lastElement.current;
                    callback();
                }
            });
        },
        [callback],
    );

    useEffect(() => {
        // if (trigger === undefined) {
        //     return;
        // }
        console.log('2StartTrigger');
        console.log('root', rootElement.current);
        console.log('prev', previousLastElement.current);
        console.log('last', lastElement.current);

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
            // lastElement.current = rootElement.current.lastChild;

            console.log('3StartEF');
            console.log('root', rootElement.current);
            console.log('prev', previousLastElement.current);
            console.log('last', lastElement.current);

            observer.current = new IntersectionObserver(handleIntersection, {
                root: rootElement.current,
            });

            // if (lastElement.current) {
            //     observer.current.observe(lastElement.current as Element);
            // }
        }

        return () => {
            observer.current?.disconnect();
        };
    }, [handleIntersection, rootElement.current]);

    return rootElement;
};
