import { FC, useState } from 'react';
import MessageOutlined from '@ant-design/icons/MessageOutlined';

import { CircleButton, CircleButtonSize } from 'ui-kit/CircleButton';

export const TestCircleButtons: FC = () => {
    const [activeButton, setActiveButton] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveButton(activeButton === index ? null : index);
    };

    return (
        <>
            {[
                CircleButtonSize.SMALL,
                CircleButtonSize.MEDIUM,
                CircleButtonSize.LARGE,
            ].map((size, index) => (
                <CircleButton
                    key={index}
                    icon={MessageOutlined}
                    label="Чаты"
                    size={size}
                    isActive={activeButton === index}
                    onClick={() => handleClick(index)}
                />
            ))}

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
