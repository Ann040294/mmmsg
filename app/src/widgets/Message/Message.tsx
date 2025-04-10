import { FC } from 'react';
import cn from 'classnames';

import { Actions } from 'ui-kit';
import { ActionItem } from 'ui-kit/Actions';
import { PopoverPosition, PopoverSide } from 'ui-kit/Popover';
import { TextViewer } from 'ui-kit/TextViewer';

import { useMessageVariant } from './utils/useMessageVariant';
import { MessageVariant } from './types';

import css from './Message.module.scss';

export interface MessageProps {
    text: string;
    actions: ActionItem[];
    countShow?: number;
    position?: PopoverPosition;
    side?: PopoverSide;
    title?: string;
    subText?: string;
    variant?: MessageVariant;
}

const MessageItem: FC<MessageProps> = ({
    actions,
    countShow,
    position,
    side,
    title,
    text,
    subText,
    variant = MessageVariant.PRIMARY,
}) => {
    const { variantTextViewer, displayActions } = useMessageVariant(variant);

    return (
        <div className={cn(css.content, css[variant])}>
            <TextViewer
                text={text}
                title={title}
                variant={variantTextViewer}
                subText={subText}
            />
            <Actions
                actions={actions}
                countShow={countShow}
                display={displayActions}
                position={position}
                side={side}
            />
        </div>
    );
};

export default MessageItem;
