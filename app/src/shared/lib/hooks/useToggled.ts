import { useCallback, useState } from 'react';

export const useToggled = (initialState?: boolean) => {
    const [isToggled, setIsToggle] = useState<boolean | undefined>(
        initialState,
    );

    const toggle = useCallback(() => {
        setIsToggle((prevState) => !prevState);
    }, []);

    const onToggle = useCallback(() => {
        setIsToggle(true);
    }, []);

    const offToggle = useCallback(() => {
        setIsToggle(false);
    }, []);

    return {
        isToggled,
        onToggle,
        offToggle,
        toggle,
    };
};
