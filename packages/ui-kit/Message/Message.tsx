import { FC, useMemo } from 'react';
import cn from 'classnames';

import { ActionItem, ActionsDisplay } from '../Actions';
import { Actions } from '../index';
import { PopoverPosition, PopoverSide } from '../Popover';
import { TextViewer, TextViewerVariant } from '../TextViewer';

import { MessageVariant } from './types';

import css from './Message.module.scss';

export interface MessageProps {
    textTextViewer: string;
    actions: ActionItem[];
    countShowActions?: number;
    positionActions?: PopoverPosition;
    sideActions?: PopoverSide;
    titleTextViewer?: string;
    subTextTextViewer?: string;
    variant?: MessageVariant;
}

const MessageItem: FC<MessageProps> = ({
    actions,
    countShowActions,
    positionActions,
    sideActions,
    titleTextViewer,
    textTextViewer,
    subTextTextViewer,
    variant = MessageVariant.PRIMARY,
}) => {
    const { variantTextViewer, displayActions } = useMemo(() => {
        let vVariant: TextViewerVariant;
        let aActions: ActionsDisplay;

        switch (variant) {
            case MessageVariant.PRIMARY:
                vVariant = TextViewerVariant.PRIMARY;
                aActions = ActionsDisplay.RIGHT;
                break;
            case MessageVariant.SECONDARY:
                vVariant = TextViewerVariant.SECONDARY;
                aActions = ActionsDisplay.LEFT;
                break;
            default:
                vVariant = TextViewerVariant.PRIMARY;
                aActions = ActionsDisplay.RIGHT;
        }

        return { variantTextViewer: vVariant, displayActions: aActions };
    }, [variant]);

    return (
        <div className={cn(css.content, css[variant])}>
            <TextViewer
                text={textTextViewer}
                title={titleTextViewer}
                variant={variantTextViewer}
                subText={subTextTextViewer}
            />
            <Actions
                actions={actions}
                countShow={countShowActions}
                display={displayActions}
                position={positionActions}
                side={sideActions}
            />
        </div>
    );
};

export default MessageItem;
