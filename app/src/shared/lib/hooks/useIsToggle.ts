import { useCallback, useState } from 'react';

export const useIsToggle = (initialState?: boolean) => {
    const [toggle, setToggle] = useState<boolean | undefined>(initialState);

    const handleChangeToggle = useCallback(() => {
        setToggle((prevState) => !prevState);
    }, []);

    return {
        toggle,
        setToggle,
        handleChangeToggle,
    };
};
