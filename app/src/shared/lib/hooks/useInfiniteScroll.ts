import { RefObject, useCallback, useEffect, useRef } from 'react';

export const useInfiniteScroll = <T extends HTMLElement | null>(
    rootElement: RefObject<T>,
    callback: () => void,
) => {
    const lastElement = useRef<ChildNode | null | undefined>(null);
    const previousLastElement = useRef<ChildNode | null | undefined>(null);
    const observer = useRef<IntersectionObserver | null>(null);
    // const array = observer.current?.takeRecords()
    // const arrayObserverEntry = observer.current?.takeRecords();
    // const pagLast = useRef<ChildNode | null | undefined>(null);

    const handleIntersection = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            // pagLast.current = rootElement.current?.lastChild?.previousSibling;
            entries.forEach((entry) => {
                if (
                    entry.isIntersecting &&
                    entry.target === lastElement.current &&
                    entry.target !== previousLastElement.current
                ) {
                    console.log('st');
                    console.log('root', rootElement.current);
                    console.log('last', lastElement.current);
                    console.log('previous', previousLastElement.current);
                    console.log('startCode');

                    previousLastElement.current = lastElement.current;
                    // console.log(
                    //     previousLastElement.current === lastElement.current,
                    // );
                    // previousLastElement.current = pagLast.current;

                    callback();

                    lastElement.current = null;

                    console.log('stAfterCallback');
                    console.log('root', rootElement.current);
                    console.log('last', lastElement.current);
                    console.log('previous', previousLastElement.current);
                    console.log('finishAfterCallback');
                    // observer.current?.unobserve(lastElement.current as Element);
                }
            });
        },
        [callback],
    );

    useEffect(() => {
        // const observer = new IntersectionObserver(handleIntersection, {
        //     root: rootElement.current,
        // });

        if (rootElement.current) {
            lastElement.current = rootElement.current.lastChild;

            console.log('startUseEf');
            console.log('root', rootElement.current);
            console.log('last', lastElement.current);
            console.log('prev', previousLastElement.current);
            console.log(
                'prev===last',
                previousLastElement.current === lastElement.current,
            );
            console.log('fUseEf');

            observer.current = new IntersectionObserver(handleIntersection, {
                root: rootElement.current,
            });
            // if (observer.current) {
            //     observer.current.disconnect();
            // }

            // observer.current = new IntersectionObserver(handleIntersection, {
            //     root: rootElement.current,
            // });

            if (lastElement.current) {
                observer.current.observe(lastElement.current as Element);
            }
        }

        return () => {
            observer.current?.disconnect();
        };
    }, [
        handleIntersection,
        rootElement.current,
        // previousLastElement.current,
        // lastElement.current,
    ]);

    return rootElement;
};
