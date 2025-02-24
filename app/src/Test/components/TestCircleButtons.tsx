import { FC } from 'react';
import { CircleButton } from 'ui-kit';
import MessageOutlined from '@ant-design/icons/MessageOutlined';

import { CircleButtonSize } from 'ui-kit/CircleButton';

export const TestCircleButtons: FC = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <>
            <CircleButton
                icon={MessageOutlined}
                label="Чаты"
                size={CircleButtonSize.SMALL}
                onClick={handleClick}
            />

            <CircleButton
                icon={MessageOutlined}
                label="Чаты"
                size={CircleButtonSize.MEDIUM}
                onClick={handleClick}
            />

            <CircleButton
                icon={MessageOutlined} //
                label="Чаты"
                size={CircleButtonSize.LARGE}
                onClick={handleClick}
            />

            <CircleButton
                icon={MessageOutlined}
                size={CircleButtonSize.LARGE}
                onClick={handleClick}
            />

            <CircleButton
                isDisabled
                icon={MessageOutlined}
                label="Чаты"
                size={CircleButtonSize.LARGE}
                onClick={handleClick}
            />
        </>
    );
};
