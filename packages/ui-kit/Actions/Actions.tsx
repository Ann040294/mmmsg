import { FC } from 'react';
import cn from 'classnames';
import MoreOutlined from '@ant-design/icons/MoreOutlined';

import { DropdownMenu } from '../DropdownMenu';
import { Icon as IconType } from '../Icon/types';
import { IconButton, IconButtonSize } from '../IconButton';
import { PopoverPosition, PopoverSide } from '../Popover';

import css from './Actions.module.scss';
import { ActionsPosition } from './types';

export interface ActionsProps {
    actionsArr: { text: string; icon: IconType }[];
    onClick?: () => void;
    show?: number;
    position?: ActionsPosition;
}

const Actions: FC<ActionsProps> = ({
    actionsArr,
    onClick: handleClick,
    show = 2,
    position = ActionsPosition.RIGHT,
}) => {
    return (
        <div className={cn(css.actions, css[position])}>
            {actionsArr.slice(show - 1).length > 0 && (
                <DropdownMenu
                    side={PopoverSide.BOTTOM}
                    position={PopoverPosition.CENTER}
                    options={actionsArr.slice(show).map((item) => ({
                        id: item.text,
                        text: item.text,
                        onClick: handleClick,
                    }))}
                >
                    <IconButton
                        icon={MoreOutlined}
                        size={IconButtonSize.EXTRA_SMALL}
                    />
                </DropdownMenu>
            )}
            {actionsArr.slice(0, show - 1).map((item) => (
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
