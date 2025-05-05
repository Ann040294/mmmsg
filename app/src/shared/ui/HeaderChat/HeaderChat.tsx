import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import MoreOutlined from '@ant-design/icons/MoreOutlined';

import { Avatar } from 'ui-kit';
import { ActionItem } from 'ui-kit/Actions';
import { AvatarShapes } from 'ui-kit/Avatar';
import { DropdownMenu } from 'ui-kit/DropdownMenu';
import { IconButton, IconButtonSize } from 'ui-kit/IconButton';
import { PopoverPosition, PopoverSide } from 'ui-kit/Popover';

import css from './HeaderChat.module.scss';

interface HeaderChatProps {
    label: string;
    actions: ActionItem[];
    avatarShape?: AvatarShapes;
    avatarSrc?: string;
}

const HeaderChat: FC<HeaderChatProps> = (props) => {
    const { t } = useTranslation();
    const dropdownActions = props.actions;

    return (
        <div className={css.root}>
            <div className={css.item}>
                <Avatar
                    shape={props.avatarShape}
                    src={props.avatarSrc}
                />
                {t(props.label)}
            </div>
            <div>
                <DropdownMenu
                    side={PopoverSide.BOTTOM}
                    position={PopoverPosition.CENTER}
                    options={dropdownActions.map((item) => ({
                        id: item.id,
                        text: item.text,
                        icon: item.icon,
                        onClick: item.onClick,
                    }))}
                >
                    <IconButton
                        icon={MoreOutlined}
                        size={IconButtonSize.MEDIUM}
                    />
                </DropdownMenu>
            </div>
        </div>
    );
};

export default HeaderChat;
