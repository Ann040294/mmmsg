import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import MoreOutlined from '@ant-design/icons/MoreOutlined';

import { Avatar, DropdownMenu, IconButton } from 'ui-kit';
import { MenuItemProps } from 'ui-kit/DropdownMenu/Item';

import css from './HeaderChat.module.scss';

interface HeaderChatProps {
    label: string;
    actions: MenuItemProps[];
    avatarSrc?: string;
}

const HeaderChat: FC<HeaderChatProps> = ({ label, actions, avatarSrc }) => {
    const { t } = useTranslation();

    return (
        <div className={css.root}>
            <div className={css.item}>
                <Avatar src={avatarSrc} />
                {t(label)}
            </div>
            <div>
                {' '}
                {/*TODO: https://github.com/Ann040294/mmmsg/issues/216 убрать div*/}
                <DropdownMenu options={actions}>
                    <IconButton icon={MoreOutlined} />
                </DropdownMenu>
            </div>
        </div>
    );
};

export default HeaderChat;
