import { FC } from 'react';
import AccountBookTwoTone from '@ant-design/icons/AccountBookTwoTone';

import { DropdownMenu } from '../DropdownMenu';
import { IconButton, IconButtonSize } from '../IconButton';
import { PopoverSide } from '../Popover';

export interface ActionProps {
    iconArr: string[];
}

const Action: FC<ActionProps> = ({ iconArr }) => {
    if (!iconArr?.length) {
        return (
            <div>
                {/*TODO: error*/}
                <h4>Not found</h4>
            </div>
        );
    }

    if (iconArr.length >= 3) {
        return (
            <DropdownMenu
                side={PopoverSide.BOTTOM}
                options={iconArr.map((item, index) => ({
                    id: index + 1,
                    text: item,
                }))}
            >
                <IconButton
                    icon={AccountBookTwoTone}
                    size={IconButtonSize.EXTRA_SMALL}
                />
            </DropdownMenu>
        );
    }

    return (
        <div>
            {iconArr.map((item) => (
                <span key={item.length}>{item}</span>
            ))}
        </div>
    );
};

export default Action;
