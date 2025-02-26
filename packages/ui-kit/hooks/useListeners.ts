import { RefObject, useEffect } from 'react';

export type EventHandler = [keyof HTMLElementEventMap, () => void];

export const useListeners = <T extends HTMLElement | null>(
    element: RefObject<T>,
    eventHandlers: EventHandler[]
) => {
    useEffect(() => {
        for (const [trigger, handler] of eventHandlers) {
            element.current?.addEventListener(trigger, handler);
        }

        return () => {
            for (const [trigger, handler] of eventHandlers) {
                element.current?.removeEventListener(trigger, handler);
            }
        }
    }, [element, eventHandlers]);
};

