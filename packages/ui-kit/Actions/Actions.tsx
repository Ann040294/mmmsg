import { FC } from 'react';
import cn from 'classnames';
import MoreOutlined from '@ant-design/icons/MoreOutlined';

import { DropdownMenu } from '../DropdownMenu';
import { IconButton, IconButtonSize } from '../IconButton';
import { PopoverPosition, PopoverSide } from '../Popover';

import { ActionsDisplay, ActionsType } from './types';

import css from './Actions.module.scss';

export interface ActionsProps {
    actions: ActionsType[];
    countShow?: number;
    display?: ActionsDisplay;
    position?: PopoverPosition;
    side?: PopoverSide;
}

const Actions: FC<ActionsProps> = ({
    actions,
    countShow = 2,
    display = ActionsDisplay.RIGHT,
    position = PopoverPosition.CENTER,
    side = PopoverSide.BOTTOM,
}) => {
    const visibleActions = actions.slice(0, countShow);
    const dropdownActions = actions.slice(countShow);

    return (
        <div className={cn(css.actions, css[display])}>
            {visibleActions.map(({
    id,
    icon,
    onClick: handleClick
}) => (
                <IconButton
                    key={id}
                    icon={icon}
                    size={IconButtonSize.EXTRA_SMALL}
                    onClick={handleClick}
                />
            ))}
            {dropdownActions.length > 0 && (
                <DropdownMenu
                    side={side}
                    position={position}
                    options={dropdownActions.map((item) => ({
                        id: item.id,
                        text: item.text,
                        onClick: item.onClick,
                    }))}
                >
                    <IconButton
                        icon={MoreOutlined}
                        size={IconButtonSize.EXTRA_SMALL}
                    />
                </DropdownMenu>
            )}
        </div>
    );
};

export default Actions;
