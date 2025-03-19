import { FC, useCallback, useMemo, useState } from 'react';
import MessageOutlined from '@ant-design/icons/MessageOutlined';

import { CircleButton, CircleButtonSize } from 'ui-kit/CircleButton';

export const TestCircleButtons: FC = () => {
    const [activeButton, setActiveButton] = useState<number | null>(null);

    const handleClick = useCallback((index: number) => {
        setActiveButton((prev) => (prev === index ? null : index));
    }, []);

    const sizes = {
        small: CircleButtonSize.SMALL,
        medium: CircleButtonSize.MEDIUM,
        large: CircleButtonSize.LARGE,
    };

    const circleButtons = useMemo(() => {
        return Object.keys(sizes).map((key, index) => (
            <CircleButton
                key={key}
                icon={MessageOutlined}
                label="Чаты"
                size={sizes[key as keyof typeof sizes]}
                isActive={activeButton === index}
                onClick={() => handleClick(index)}
            />
        ));
    }, [activeButton, handleClick]);

    return (
        <>
            {circleButtons}

            <CircleButton
                icon={MessageOutlined}
                size={CircleButtonSize.LARGE}
                isActive={activeButton === 3}
                onClick={() => handleClick(3)}
            />

            <CircleButton
                isDisabled
                icon={MessageOutlined}
                label="Чаты"
                size={CircleButtonSize.LARGE}
                onClick={() => handleClick(4)}
            />
        </>
    );
};
