import { useCallback, useState } from 'react';

export const useIsOpen = (initialState=false) => {

    const [isOpen, setIsOpen] = useState<boolean>(initialState);

    const handleChangeToggle = useCallback(() => {
        setIsOpen((prevState) => !prevState);
    }, []);

    const handleOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return {isOpen, open: handleOpen, close: handleClose, toggle: handleChangeToggle};
};
