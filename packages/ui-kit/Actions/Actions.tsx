import {FC} from 'react';
import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined';

import {DropdownMenu} from '../DropdownMenu';
import {Icon as IconType} from '../Icon/types';
import {IconButton, IconButtonSize} from '../IconButton';
import {PopoverSide} from '../Popover';

export interface ActionProps {
    iconArr: { text: string; icon: IconType }[];
}

const Actions: FC<ActionProps> = ({ iconArr }) => {
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
                    icon={MenuFoldOutlined}
                    size={IconButtonSize.EXTRA_SMALL}
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
                />
            ))}
        </div>
    );
};

export default Actions;
