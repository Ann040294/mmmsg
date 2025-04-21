import { useCallback, useEffect, useRef, useState } from 'react';

export const useIsToggled = (initialState?: boolean) => {
    const [isToggled, setIsToggle] = useState<boolean | undefined>(
        initialState,
    );

    const isToggledRef = useRef<boolean | undefined>(initialState);

    useEffect(() => {
        isToggledRef.current = isToggled;
    }, [isToggled]);

    const toggle = useCallback(() => {
        setIsToggle((prevState) => !prevState);
    }, []);

    const toggleOn = useCallback(() => {
        setIsToggle(true);
    }, []);

    const toggleOff = useCallback(() => {
        setIsToggle(false);
    }, []);

    return {
        isToggled,
        isToggledRef,
        toggleOn,
        toggleOff,
        toggle,
    };
};
