import { FC } from 'react';
import { createPortal } from 'react-dom';

import PopoverWrapper, { PopoverWrapperProps } from './PopoverWrapper';

interface PopoverProps extends PopoverWrapperProps {
    isDisablePortal?: boolean;
}

const Popover: FC<PopoverProps> = ({
    isDisablePortal = false,
    ...props
}) => {
    if (isDisablePortal || !props.anchorElement) {
        return <PopoverWrapper {...props} />;
    }

    return createPortal(<PopoverWrapper {...props} />, props.anchorElement);
};

export default Popover;
