import React, { FC } from 'react';
import cn from 'classnames';

import css from './TextViewer.module.scss'

export interface TextViewerProps {
    text: string;
    isSender?: boolean;
    timestamp: string;
}

const TextViewer: FC<TextViewerProps> = ({
                                        text,
                                        isSender = false,
                                        timestamp }) => {
    return (
        <div className={cn(css.chat)}>
            <div className={cn(css.chatcontent, {[css.sender]: isSender})}>
                <p className={cn(css.chattext)}>{text}</p>
                {timestamp && (
                    <span className={cn(css.chattimestamp)}>{timestamp}</span>
                )}
            </div>
        </div>
    );
};

export default TextViewer;