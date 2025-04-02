import { FC } from 'react';
import cn from 'classnames';
import MoreOutlined from '@ant-design/icons/MoreOutlined';

import { DropdownMenu } from '../DropdownMenu';
import { Icon as IconType } from '../Icon/types';
import { IconButton, IconButtonSize } from '../IconButton';
import { PopoverPosition, PopoverSide } from '../Popover';

import { ActionsDisplay } from './types';

import css from './Actions.module.scss';

export interface ActionsProps {
    actionsArr: { id: string | number; text: string; icon: IconType }[];
    onClick?: () => void;
    countShow?: number;
    display?: ActionsDisplay;
    position?: PopoverPosition;
    side?: PopoverSide;
}

const Actions: FC<ActionsProps> = ({
    actionsArr,
    onClick: handleClick,
    countShow = 2,
    display = ActionsDisplay.RIGHT,
    position = PopoverPosition.CENTER,
    side = PopoverSide.BOTTOM,
}) => {
    return (
        <div className={cn(css.actions, css[display])}>
            {actionsArr.slice(countShow).length > 0 && (
                <DropdownMenu
                    side={side}
                    position={position}
                    options={actionsArr.slice(countShow).map((item) => ({
                        id: item.id,
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
            {actionsArr.slice(0, countShow).map((item) => (
                <IconButton
                    key={item.id}
                    icon={item.icon}
                    size={IconButtonSize.EXTRA_SMALL}
                    onClick={handleClick}
                />
            ))}
        </div>
    );
};

export default Actions;
