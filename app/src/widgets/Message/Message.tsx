import { FC } from 'react';
import cn from 'classnames';

import { Actions } from 'ui-kit';
import { ActionItem } from 'ui-kit/Actions';
import { PopoverPosition, PopoverSide } from 'ui-kit/Popover';
import { TextViewer } from 'ui-kit/TextViewer';

import { useMessageVariant } from '@widgets/Message/hooks/useMessageVariant';

import { MessageVariant } from './types';

import css from './Message.module.scss';

export interface MessageProps {
    text: string;
    actions: ActionItem[];
    countShow?: number;
    positionActions?: PopoverPosition;
    sideActions?: PopoverSide;
    title?: string;
    subText?: string;
    variant?: MessageVariant;
}

const MessageItem: FC<MessageProps> = ({
    actions,
    variant = MessageVariant.PRIMARY,
    ...props
}) => {
    const { variantTextViewer, displayActions } = useMessageVariant(variant);

    return (
        <div className={cn(css.content, css[variant])}>
            <TextViewer
                text={props.text}
                title={props.title}
                variant={variantTextViewer}
                subText={props.subText}
            />
            <Actions
                actions={actions}
                countShow={props.countShow}
                display={displayActions}
                position={props.positionActions}
                side={props.sideActions}
            />
        </div>
    );
};

export default MessageItem;
