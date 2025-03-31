import { FC } from 'react';
import MoreOutlined from '@ant-design/icons/MoreOutlined';

import { DropdownMenu } from '../DropdownMenu';
import { Icon as IconType } from '../Icon/types';
import { IconButton, IconButtonSize } from '../IconButton';
import { PopoverSide } from '../Popover';

export interface ActionsProps {
    iconArr: { text: string; icon: IconType }[];
    onClick?: () => void;
}

const Actions: FC<ActionsProps> = ({
    iconArr,
    onClick: handleClick
}) => {
    if (iconArr.length > 3) {
        return (
            <DropdownMenu
                side={PopoverSide.BOTTOM}
                options={iconArr.map((item) => ({
                    id: item.text,
                    text: item.text,
                    icon: item.icon,
                }))}
            >
                <IconButton
                    icon={MoreOutlined}
                    size={IconButtonSize.EXTRA_SMALL}
                    onClick={handleClick}
                />
            </DropdownMenu>
        );
    }

    return (
        <div>
            {iconArr.map((item) => (
                <IconButton
                    key={item.text}
                    icon={item.icon}
                    size={IconButtonSize.EXTRA_SMALL}
                    onClick={handleClick}
                />
            ))}
        </div>
    );
};

export default Actions;
