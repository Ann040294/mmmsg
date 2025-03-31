import { useCallback, useState } from 'react';

export const useIsToggled = (initialState?: boolean) => {
    const [isToggled, setIsToggle] = useState<boolean | undefined>(
        initialState,
    );

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
        toggleOn,
        toggleOff,
        toggle,
    };
};
