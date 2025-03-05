import React, {FC} from 'react';
import cn from 'classnames';

import css from './TextViewer.module.scss';

export interface TextViewerProps {
    text: string;
    timestamp: string;
    isSender?: boolean;
}

const TextViewer: FC<TextViewerProps> = ({
                                             text,
                                             timestamp,
                                             isSender = false,
                                         }) => {
    return (
        <div className={cn(css.message)}>
            <div className={cn(css.messagecontent, isSender ? [css.sender] : [css.recipient])}>
                <p className={cn(css.messagetext)}>{text}</p>
                <span className={cn(css.messagetimestamp)}>{timestamp}</span>
            </div>
        </div>
    );
};

export default TextViewer;